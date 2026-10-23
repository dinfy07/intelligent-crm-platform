# Requirement traceability

| ID | Component | Scenario | Verification | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| FR-01 | API / database | Manage users and inspect assigned records; deny forbidden direct-ID access | API access matrix including direct-ID requests | Danial | Proposed; server criteria unimplemented |
| FR-02 | API / database | Create or update a customer and reject an invalid write | API CRUD and invalid-input tests | Danial | Proposed; server criteria unimplemented |
| FR-03 | API / database | UX-04 | Schema validation and import fixtures | Danial | Proposed; server criteria unimplemented |
| FR-04 | Web UI / review | UX-01 | API query tests and UI task | Beybit | UI example demonstrated; full API/durability criteria pending |
| FR-05 | API / database | Submit a job, process it, recover a crashed worker and reject duplicates | Duplicate submission, worker crash and retry tests | Danial | Proposed; server criteria unimplemented |
| FR-06 | Analysis / QA | UX-02 | Analysis contract and adversarial cases | Akhmediyar | UI example demonstrated; full API/durability criteria pending |
| FR-07 | Web UI / review | UX-03 | Review version and audit tests | Beybit | UI example demonstrated; full API/durability criteria pending |
| FR-08 | Analysis / QA | UX-05 | Timeout, unavailable model and malformed-output tests | Akhmediyar | UI example demonstrated; full API/durability criteria pending |
| FR-09 | API / database | UX-06 | Export schema and permission tests | Danial | UI example demonstrated; full API/durability criteria pending |
| FR-10 | Analysis / QA | Freeze inputs, compare methods and reproduce the recorded run | Re-run using frozen inputs and manifest | Akhmediyar | Proposed; server criteria unimplemented |
| FR-11 | Web UI / review | Filter the overview and reconcile counts with accessible records | Count reconciliation and empty dataset | Beybit | Proposed; server criteria unimplemented |
| FR-12 | API / database | Validate one permitted optional adapter against its contract | Adapter-specific acceptance set | Danial | Proposed; server criteria unimplemented |

## Nonfunctional mapping

| ID | Responsible component | Planned verification | Current limit |
| --- | --- | --- | --- |
| NFR-01 | Repository, API and analysis adapter | Repository review and data-use checks | Examples only; no real customer data provided |
| NFR-02 | Web UI | Full keyboard task pass and 390/1440 px review | Browser width and focus smoke checks passed; full keyboard task study pending |
| NFR-03 | API and PostgreSQL | Declared-host load test | Backend unimplemented, target unmeasured |
| NFR-04 | Analysis worker | Latency, memory and injected failures | Browser baseline only; production worker pending |
| NFR-05 | Analysis and experiment runner | Frozen manifest and repeated run | Baseline deterministic tests passed; model experiment pending |
| NFR-06 | PostgreSQL and review service | Restart, backup and restore | Browser local storage only |
| NFR-07 | Import, output validator and UI | Boundary inputs and safe text rendering | Baseline bounds and UI text checks passed; server/import limits pending |
| NFR-08 | Review service and UI | Human decision and audit checks | UI approval/rejection tested; authenticated audit pending |
