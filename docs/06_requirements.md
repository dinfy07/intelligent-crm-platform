# Initial requirements specification

## Status and priorities

This is a testable initial baseline proposed by the team. User validation and supervisor review remain open. Must is mandatory for the diploma MVP, Should follows mandatory scenarios, Could is optional. The browser prototype demonstrates selected UI flows only and does not satisfy server-side access or persistence requirements.

| ID | Priority | Requirement | Acceptance criterion | Verification | Owner |
| --- | --- | --- | --- | --- | --- |
| FR-01 | Must | Session and object-level access | An analyst can view only assigned customer records; a manager can view all records in this organisation; only an admin manages users. Anonymous and forbidden requests return 401/403 without object content. | API access matrix including direct-ID requests | Danial |
| FR-02 | Must | Customer records | Authorised users create, view and update a customer with a unique ID, display name and owner. Blank names fail validation and rejected updates leave stored data unchanged. | API CRUD and invalid-input tests | Danial |
| FR-03 | Must | Interaction capture | Enter or import JSON with customer ID, channel, timestamp and ordered speaker/text turns. Unknown customer, invalid timestamp, missing turn text and excess size produce per-record errors before persistence. | Schema validation and import fixtures | Danial |
| FR-04 | Must | Search and filters | Search by customer name and filter interactions by customer, channel, date and review state. Combining filters returns their intersection and shows a usable empty state. | API query tests and UI task | Beybit |
| FR-05 | Must | Durable analysis job | For the same interaction revision and method/config version, repeated creation requests return one job. Status is queued, running, succeeded or failed. Bounded retry never overwrites a successful run. | Duplicate submission, worker crash and retry tests | Danial |
| FR-06 | Must | Analysis result with provenance | A completed run stores topic labels, an at-most-120-word summary, source-turn references, source hash, method/model/config version and creation time. Invalid references fail output validation. | Analysis contract and adversarial cases | Akhmediyar |
| FR-07 | Must | Human review | A reviewer inspects source and result side by side, edits the reviewed summary and approves or rejects it. The original output remains immutable and reviewer, timestamp and decision are recorded. | Review version and audit tests | Beybit |
| FR-08 | Must | Failure recovery | Failed jobs show an actionable error without customer text or secrets in the message. An authorised retry creates an attempt record and preserves prior failure history. | Timeout, unavailable model and malformed-output tests | Akhmediyar |
| FR-09 | Must | Export | Authorised export returns only accessible customer/interactions, both raw and reviewed results, provenance and review status. Empty selection produces a clear validation message. | Export schema and permission tests | Danial |
| FR-10 | Must | Run comparison | An experiment records dataset revision, baseline/candidate, configuration and metrics. An output table separates measured results from unexecuted targets. | Re-run using frozen inputs and manifest | Akhmediyar |
| FR-11 | Should | Overview | A manager sees counts by topic and review state from the same authorised filtered data. Counts reconcile with the underlying list. | Count reconciliation and empty dataset | Beybit |
| FR-12 | Could | Additional source adapter | A second connector is added only after mandatory scenarios pass and data permission is documented. | Adapter-specific acceptance set | Danial |

## Non-functional requirements

| ID | Priority | Requirement | Acceptance criterion | Verification |
| --- | --- | --- | --- | --- |
| NFR-01 | Must | Confidential data | No secrets or real customer records in Git. Example configuration uses placeholders. External inference stays disabled unless a data-use decision permits it. | Secret scan and repository review |
| NFR-02 | Must | Usability and keyboard access | Core review/import tasks work with keyboard only. Controls have labels and visible focus. At 390 px and 1440 px the primary workflow has no unintended page overflow. | Manual keyboard pass and browser checks |
| NFR-03 | Must | API responsiveness target | On a documented 4-core/8-GB reference host and 10 concurrent users over 1,000 synthetic customers and 5,000 interactions, non-inference reads target p95 <= 500 ms over 200 requests after warm-up. Exclude network-to-model time and report it separately. | Load test with recorded host and request mix; target, not observed result |
| NFR-04 | Must | Inference operational bound | With fixed model, host and inputs up to 2,000 words, report cold/warm p50/p95 latency, memory and failure rate. Set a 60-second job timeout and at most 2 automatic retries. No quality/latency pass is claimed before measurement. | Timed evaluation with failure injection |
| NFR-05 | Must | Reproducible runs | Every evaluation records code commit, dataset hash, method/model revision, prompt/config and environment. Non-deterministic methods report settings and run variability. | Manifest validation and second-run comparison |
| NFR-06 | Must | Persistence and audit | Successful writes are durable across an app restart. Review changes preserve raw outputs. A backup/restore rehearsal reconciles customer, interaction and review counts. | Restart and restore integration tests |
| NFR-07 | Must | Input and output limits | API rejects interaction text above 2,000 words or 100 KB and imports above 100 records. Client rendering treats transcript/model output as text, not executable HTML. | Boundary and script-injection tests |
| NFR-08 | Must | Review accountability | Only a human action sets approval. An algorithmic confidence value is not presented as a probability of correctness unless calibrated. | Review-state tests and UI inspection |

## Change control

Link each amendment to a discovery note or review comment, identify its owner and update the traceability matrix, diagram, test and prototype where relevant. Distinguish a changed target from a measured result.
