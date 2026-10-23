# ADR-03 Storage

Status: proposed on 2026-10-19. Owner and reviewers must record their decision.

Candidate: PostgreSQL

Alternatives: MongoDB; SQLite

Rationale: Proposed: relational customer/review records with JSONB analysis payloads [T07–T09].

Trade-off: MongoDB supports transactions. SQLite remains suitable for some embedded cases. Actual multi-user write and backup needs drive selection.

Approval and review evidence: not recorded.
