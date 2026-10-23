# ADR-05 Analysis

Status: proposed on 2026-10-19. Owner and reviewers must record their decision.

Candidate: Deterministic extractive baseline plus one pretrained candidate

Alternatives: Rules/extraction only; hosted LLM adapter

Rationale: Mandatory baseline is inspectable and cheap. Compare a locally runnable pretrained method before choosing the final approach [L03–L10, T12, T13].

Trade-off: The final model is deliberately unselected until quality, language, licence, latency and hardware tests. Do not silently send client records to an external provider.

Approval and review evidence: not recorded.
