async (page) => {
  // Pass this function to Playwright CLI run-code from the repository root.
  // Use a dedicated browser session: this clears only the prototype storage key.
  const checks = [], errors = [];
  const onError = error => errors.push(error.message);
  const ok = (condition, label) => {
    if (!condition) throw new Error(label);
    checks.push(label);
  };
  const completed = () => page.getByRole('status').filter({hasText:'Analysis complete'}).waitFor();
  const artifactDir = 'build/predefense-checks-2026-10-24';
  page.on('pageerror', onError);
  try {
    const location = new URL(page.url());
    if (location.protocol !== 'http:' || !['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
      throw new Error('Run these checks only against the local prototype.');
    }
    await page.evaluate(() => localStorage.removeItem('crm-diploma-prototype-v1'));
    await page.reload();
    await page.getByRole('textbox', {name:'Reviewed summary', exact:true}).waitFor();

    await page.getByRole('button', {name:'Run analysis', exact:true}).click();
    ok(await page.getByRole('region', {name:'Analysis and human review'}).getAttribute('aria-busy') === 'true', 'Running analysis exposes its busy state');
    ok(await page.getByRole('button', {name:'Approve review', exact:true}).isDisabled(), 'An in-flight result cannot be approved');
    ok(await page.getByRole('button', {name:'Export selected JSON', exact:true}).isDisabled(), 'An in-flight result cannot be exported');
    ok(await page.getByRole('button', {name:'Add interaction', exact:true}).isDisabled(), 'Capture is paused during analysis');
    ok(await page.locator('#reset-demo').isDisabled(), 'Reset cannot discard an in-flight analysis');
    await completed();
    ok(await page.getByRole('region', {name:'Analysis and human review'}).getAttribute('aria-busy') === 'false', 'Busy state clears after completion');

    await page.getByRole('button', {name:'Inspect source turn 1'}).click();
    ok(await page.locator('#turn-1').evaluate(turn => turn.classList.contains('highlight') && turn === document.activeElement), 'Source reference highlights and focuses its original turn');
    const raw = await page.locator('.summary').innerText();
    await page.getByRole('textbox', {name:'Reviewed summary', exact:true}).fill('');
    await page.getByRole('button', {name:'Approve review', exact:true}).click();
    ok(await page.getByRole('status').innerText() === 'Enter a reviewed summary before saving a decision.', 'Blank review is rejected');
    const reviewed = 'Checked: one payment; the agent will send a corrected statement.';
    await page.getByRole('textbox', {name:'Reviewed summary', exact:true}).fill(reviewed);
    await page.getByRole('button', {name:'Approve review', exact:true}).click();
    ok(await page.locator('.summary').innerText() === raw, 'Approval preserves the raw analysis');
    await page.reload();
    await page.getByText('Approved by demo reviewer. Raw analysis is preserved.').waitFor();
    ok(await page.getByRole('textbox', {name:'Reviewed summary', exact:true}).inputValue() === reviewed, 'Reviewed text survives reload');

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name:'Export selected JSON', exact:true}).click();
    const download = await downloadPromise;
    await download.saveAs(`${artifactDir}/fixture-export.json`);
    checks.push('Selected synthetic result downloads as JSON');

    await page.getByRole('combobox', {name:'Filter review status'}).selectOption('unreviewed');
    await page.getByRole('heading', {name:'Team onboarding', exact:true}).waitFor();
    await page.getByRole('button', {name:'Approve review', exact:true}).click();
    ok(await page.locator('.interaction-item.selected').count() === 1, 'Approval under a filter keeps a visible selection');
    ok(await page.locator('.detail-head h2').innerText() === 'API access issue', 'Detail moves to the next matching interaction after approval');
    await page.getByRole('searchbox', {name:'Search customers and interactions'}).fill('no-such-customer');
    ok(await page.getByText('No interactions match. Change the search or review filter.').isVisible(), 'Combined filters show an actionable empty state');
    ok(await page.getByText('Select an interaction to inspect.').isVisible(), 'An empty list clears stale detail and export actions');
    await page.getByRole('searchbox', {name:'Search customers and interactions'}).fill('');
    await page.getByRole('combobox', {name:'Filter review status'}).selectOption('failed');
    await page.getByRole('button', {name:'Retry analysis', exact:true}).click();
    await completed();
    ok(await page.getByText('Select an interaction to inspect.').isVisible(), 'A recovered record leaves the failed-only filter');
    await page.getByRole('combobox', {name:'Filter review status'}).selectOption('all');
    await page.getByRole('button', {name:'Orion Design: Analysis needs a retry'}).click();
    ok(await page.getByRole('textbox', {name:'Reviewed summary', exact:true}).isVisible(), 'Retry produces a reviewable result');

    await page.getByRole('button', {name:'Add interaction', exact:true}).click();
    await page.getByRole('button', {name:'Save interaction', exact:true}).click();
    ok(await page.getByRole('alert').innerText() === 'Enter a customer name.', 'Capture rejects missing required fields');
    await page.getByRole('textbox', {name:'Customer name', exact:true}).fill('QA Fictional Customer');
    await page.getByRole('textbox', {name:'Interaction title', exact:true}).fill('Safe text rendering');
    await page.getByRole('textbox', {name:'Conversation text', exact:true}).fill('Customer:   \nAgent: Hello');
    await page.getByRole('button', {name:'Save interaction', exact:true}).click();
    ok(await page.getByRole('alert').innerText() === 'Use one Speaker: message line for each turn.', 'Capture rejects an empty turn message');
    await page.getByRole('textbox', {name:'Conversation text', exact:true}).fill('Customer: <img src=x onerror=alert(1)> I have an invoice question.\nAgent: Please send the invoice number. No refund has been agreed.');
    await page.getByRole('button', {name:'Save interaction', exact:true}).click();
    await page.getByRole('button', {name:'Run analysis', exact:true}).click();
    await completed();
    ok(await page.locator('.conversation img').count() === 0, 'Transcript markup remains plain text');
    await page.getByRole('button', {name:'Reject', exact:true}).click();
    ok(await page.getByText('Rejected by demo reviewer. Raw analysis is preserved.').isVisible(), 'Rejection is a separate review decision');

    for (const [width, height] of [[390, 844], [768, 1024], [1440, 1080]]) {
      await page.setViewportSize({width, height});
      await page.evaluate(() => window.scrollTo(0, 0));
      ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Workspace has no horizontal overflow at ${width} px`);
      ok(await page.locator('.analysis').evaluate(panel => panel.getBoundingClientRect().right <= innerWidth), `Analysis panel fits at ${width} px`);
      await page.screenshot({path:`${artifactDir}/prototype-${width}.png`, fullPage:true});
    }
    await page.getByRole('button', {name:'Method & limits', exact:true}).click();
    ok(await page.locator('#baseline-version').innerText() === 'keyword-extractive-v2', 'Method view reports the current implementation version');
    await page.getByRole('button', {name:'Interactions', exact:true}).click();
    await page.getByRole('searchbox').focus();
    await page.keyboard.press('Tab');
    ok(await page.getByRole('combobox', {name:'Filter review status'}).evaluate(select => select === document.activeElement), 'Keyboard moves from search to the review filter');
    ok(errors.length === 0, 'No uncaught browser errors');
    return {checksPassed:checks.length, checks, limitations:'Synthetic prototype checks only; not evidence of model quality, backend security or a user study.'};
  } finally {
    page.removeListener('pageerror', onError);
  }
}
