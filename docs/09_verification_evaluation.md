# Verification and evaluation plan

## Status and hypotheses
This is a prospective protocol. No user study, model benchmark or production performance measurement has been completed. UI/prototype tests are reported separately in the actual verification record. Literature scores are never substituted for project results.

## Data and splits
Target 120 de-identified, permissioned or clearly synthetic CRM-like text interactions. Use 20 development records for prompt/rule tuning and 100 held-out records for final reporting. Freeze IDs and hashes before comparison. If fewer records are available, report the actual count and explain the limitation. Keep variants of one conversation in the same split. Include clear cases, ambiguous intent, negation, multiple participants, missing next steps, long inputs and out-of-vocabulary topics. Initial quality claims cover English only.

Public datasets [L01, L02] may support a separate smoke benchmark after licence review. They cannot replace the domain set. Synthetic fixtures establish functionality, not business validity or representative quality.

## Annotation
Before scoring outputs, define topic classes and key facts: customer issue, relevant constraints, explicitly agreed action, responsible participant and date only where present. Two reviewers independently annotate source facts and output errors, then adjudicate disagreements. Rotate review to reduce conflicts when a developer evaluates their own method. Preserve raw labels and report agreement. With only team reviewers, disclose bias and seek an external reviewer if feasible. User participation requires permission for notes and any quotations.

## Methods and controlled conditions
B0 manual reading is the workflow baseline. B1 deterministic keyword topics plus extractive summary is the algorithmic baseline. C1 is one pinned pretrained candidate selected after hardware/language/licence checks. A hosted LLM is an optional separate condition, not an implicit dependency. Each method sees identical held-out inputs and the same output schema. Freeze prompts/configurations after development. Record code commit, method/model revision, runtime, operating system, CPU/GPU/RAM, source hashes and seeds/settings. Use three repetitions for stochastic methods and report variation.

## Metrics and planned decision rules
Topic tagging: report per-class precision, recall and F1 and macro-F1, including absent/rare classes. Proposed target macro-F1 >= 0.75 on the held-out set.
Factuality: human-supported factual claims / all generated factual claims. Report unsupported and contradicted claims separately. Proposed target >= 0.95 supported claims and zero unsupported commitments or deadlines. Empty/no-claim summaries do not count as perfect: report them separately and score coverage.
Key-fact coverage: correctly represented required source facts / all annotated required source facts. Proposed target >= 0.80, macro-averaged per interaction. Coherence/relevance: independent 1–5 rubric as secondary diagnostics [L03, L09].
Operational behaviour: schema-valid outputs, failed runs, timeouts, duplicate jobs, retries and source-reference validity. A raw result must have 100% valid source IDs. Report latency p50/p95, peak memory and cost per run when applicable. Limits and load conditions follow NFR-03–NFR-07.
Targets are initial engineering acceptance proposals, not measured achievements and not a guaranteed result of any model.

## User task comparison
After discovery, recruit at least five target-user representatives where feasible, distinct from the developers. Each completes four matched task pairs: manual reading versus the review workspace, using different but comparable interactions. Counterbalance order to reduce learning effects. Measure time from opening the task until an answer, accuracy on source-checked questions, correction actions and usability comments. Compare median paired time difference and error counts, with uncertainty intervals where the actual sample permits. A proposed success condition is a >= 20% median time reduction without more task errors; a small convenience sample supports exploratory conclusions only.

If independent users cannot be recruited, label a team-only pilot explicitly and leave the user-benefit question unresolved. The 3–5 discovery discussions and the later usability experiment serve different purposes and must not be conflated.

## Test layers
Unit: schema validators, topic rules, reference validator and state transitions.
Integration: authorised CRUD/import, durable job processing, duplicate creation, review history, export access and restart/restore.
Browser: valid/invalid capture, search/filter, inspect source, analyse, edit/approve/reject, retry, export, keyboard navigation and mobile overflow.
Adversarial: script strings, prompt-like instructions in transcripts, participant swaps, negation, fabricated dates, missing fields, oversized inputs, unavailable model and concurrent worker completion.

## Reporting
Publish the frozen evaluation manifest, de-identified permitted data or a reproducible public substitute, raw predictions, reviewer annotations, aggregated metrics, failure examples and threats to validity. Provide a results table with fields unfilled until an experiment actually runs. Consider domain shift, small samples, language limits, annotation disagreement, model changes and synthetic-data bias.
