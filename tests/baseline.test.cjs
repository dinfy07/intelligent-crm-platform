const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const baseline = require('../prototype/baseline.js');

test('topics come from messages rather than participant names', async () => {
  const result = await baseline.analyse('Billing: Hello there.\nAccess: Good morning.');
  assert.deepEqual(result.topics, ['Other']);
});

test('topic matching respects whole words and case', async () => {
  const result = await baseline.analyse('Customer: The PAYMENT failed; I need a REFUND.');
  assert.deepEqual(result.topics, ['Billing']);
  const unrelated = await baseline.analyse('Customer: A tokenization workshop is planned.');
  assert.deepEqual(unrelated.topics, ['Other']);
});

test('multiple topics can coexist without turning a result into an approval', async () => {
  const result = await baseline.analyse('Customer: Please cancel the renewal and refund my payment.');
  assert.deepEqual(result.topics, ['Billing', 'Cancellation']);
  assert.equal(result.review, undefined);
});

test('empty speaker, empty message and malformed turns are rejected', () => {
  for (const text of ['Customer: ', ' : Hello', 'Customer:   \nAgent: Hello', 'No speaker delimiter']) {
    assert.throws(() => baseline.parseTurns(text), /Speaker: message/);
  }
});

test('blank and oversized input are rejected before analysis', async () => {
  await assert.rejects(baseline.analyse(' \n '), /Enter the interaction/);
  await assert.rejects(baseline.analyse(`Customer: ${'word '.repeat(2001)}`), /2,000 words/);
  await assert.rejects(baseline.analyse(`Customer: ${'я'.repeat(50000)}`), /100 KB/);
});

test('ordered source references point to the exact extracted messages', async () => {
  const text = 'Customer: Hello.\nAgent: Please send the invoice.\nCustomer: I need a refund.\nAgent: The payment will be checked.';
  const turns = baseline.parseTurns(text);
  const result = await baseline.analyse(text);
  assert.equal(result.sourceRefs.length, 3);
  assert.deepEqual(result.sourceRefs, result.excerpts.map(excerpt => excerpt.turnId));
  const sequences = result.sourceRefs.map(id => turns.find(turn => turn.id === id).sequence);
  assert.deepEqual(sequences, [...sequences].sort((a, b) => a - b));
  for (const excerpt of result.excerpts) {
    assert.equal(excerpt.text, turns.find(turn => turn.id === excerpt.turnId).text);
  }
});

test('long extracts stay within the 120-word summary budget', async () => {
  const result = await baseline.analyse(`Customer: ${'invoice '.repeat(150)}`);
  assert.ok(result.summary.split(/\s+/).length <= 120);
  assert.equal(result.excerpts.length, 1);
  assert.ok(result.summary.endsWith('…'));
});

test('source hash covers the original input and results are reproducible', async () => {
  const text = 'Customer: I need access.\nAgent: Please check the token.';
  const first = await baseline.analyse(text);
  const second = await baseline.analyse(text);
  assert.equal(first.sourceHash, createHash('sha256').update(text).digest('hex'));
  const { createdAt: firstTime, ...firstContent } = first;
  const { createdAt: secondTime, ...secondContent } = second;
  assert.deepEqual(firstContent, secondContent);
  assert.ok(!Number.isNaN(Date.parse(firstTime)));
  assert.ok(!Number.isNaN(Date.parse(secondTime)));
  assert.notEqual((await baseline.analyse(`${text} `)).sourceHash, first.sourceHash);
});

test('negated keywords remain a documented baseline limitation', async () => {
  const result = await baseline.analyse('Customer: There is no refund request.');
  assert.deepEqual(result.topics, ['Billing']);
  assert.match(result.summary, /no refund request/);
});
