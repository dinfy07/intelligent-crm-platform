# ADR-04 Interaction

Status: proposed on 2026-10-19. Owner and reviewers must record their decision.

Candidate: Resource-oriented HTTP JSON + job polling

Alternatives: GraphQL; brokered messaging

Rationale: Proposed: HTTP JSON for UI/API and durable PostgreSQL job state for the worker. It minimises initial services [T10, T11, T14].

Trade-off: GraphQL query flexibility and a broker may be useful later. Queue retries, leases and idempotency still need implementation and tests.

Approval and review evidence: not recorded.
