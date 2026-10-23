# Technology comparison

## Decision method

Five key decisions each have three alternatives. Selection criteria are requirement fit, team maintainability, reproducible evaluation, operational simplicity, data handling and resource constraints. Ratings below are qualitative design judgements, not measured performance rankings. All choices are proposed and require team/supervisor review.

| Decision | Preferred candidate | Alternatives | Rationale | Trade-off and reopen condition |
| --- | --- | --- | --- | --- |
| ADR-01 Frontend | Vue 3 + TypeScript | React + TypeScript; Angular | Proposed: Vue. Vue experience was reported by Beybit. Components, forms and a review workspace fit the scope [T01–T03]. | Do not claim a performance advantage without measurement. Prototype is portable HTML/JS, not a completed Vue application. |
| ADR-02 Server | FastAPI / Python | NestJS / TypeScript; Django / Python | Proposed: FastAPI for validated API contracts and proximity to Python analysis code [T04–T06]. | Danial must confirm maintainability. Keep inference outside request handlers. This is a documented proposal, not a benchmark winner. |
| ADR-03 Storage | PostgreSQL | MongoDB; SQLite | Proposed: relational customer/review records with JSONB analysis payloads [T07–T09]. | MongoDB supports transactions. SQLite remains suitable for some embedded cases. Actual multi-user write and backup needs drive selection. |
| ADR-04 Interaction | Resource-oriented HTTP JSON + job polling | GraphQL; brokered messaging | Proposed: HTTP JSON for UI/API and durable PostgreSQL job state for the worker. It minimises initial services [T10, T11, T14]. | GraphQL query flexibility and a broker may be useful later. Queue retries, leases and idempotency still need implementation and tests. |
| ADR-05 Analysis | Deterministic extractive baseline plus one pretrained candidate | Rules/extraction only; hosted LLM adapter | Mandatory baseline is inspectable and cheap. Compare a locally runnable pretrained method before choosing the final approach [L03–L10, T12, T13]. | The final model is deliberately unselected until quality, language, licence, latency and hardware tests. Do not silently send client records to an external provider. |

## Interaction choice in detail

A durable analysis job allows the UI to stay responsive while inference runs. POST creates or returns an idempotent job for a source revision and method version. GET polls job status. A worker leases a job, validates output, stores the run and marks success or failure. Lease expiry permits bounded retries. Authentication, authorisation and source revision checks occur server-side.

## Reproducibility

Lock exact versions during implementation, record the model revision and prompt/config hash, and keep benchmark inputs separate from tuning data. No GPU, model provider or paid account is assumed available. Reopen ADR-02 if the backend owner cannot maintain the chosen stack, and ADR-05 if the candidate cannot meet quality or resource targets.
