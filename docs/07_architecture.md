# Architecture and diagrams

## Proposed system
A modular CRM API and an analysis worker share a PostgreSQL database. The planned UI uses Vue 3 and TypeScript. The October deliverable is a separate portable HTML/JavaScript interaction prototype. It has no authentication, server persistence or trained model and is never presented as the full application.

## Context and trust boundaries
Analysts handle assigned customers, managers review the organisation's records and administrators manage accounts/configuration. Text arrives through manual entry or a validated import. The browser is untrusted: the server rechecks session, role, object ownership, size and schema. The worker treats transcript instructions as untrusted content and validates model output. External providers are optional and disabled until an approved data-use decision exists.

## Components
1. Web UI: customer list, interaction workspace, import, review and export actions. Beybit owns UI delivery.
2. CRM API: authentication, authorisation, customer/interaction repositories, import validation, job endpoints, review versions, export and audit. Danial owns backend delivery.
3. Analysis worker: obtains durable jobs, selects a method adapter, computes topics and summary, validates references, stores immutable runs and records failures. Akhmediyar owns analysis and QA with Danial supporting job durability.
4. PostgreSQL: authoritative customers, ordered turns, jobs, runs, reviews and audit events. A model file is an external dependency with a recorded revision/licence, not a database entity.

## Core analysis scenario
An authorised analyst opens an assigned customer and submits a validated interaction revision. The API computes its source hash, returns an existing job for the same revision/config or stores a queued job and returns 202. The worker leases the job, runs the method, validates the schema and source references, and commits the immutable analysis run. The UI polls status. A human inspects the result against ordered source turns and saves an approved, edited or rejected review. Export includes both raw and reviewed values.

## States and failure handling
Job: queued -> running -> succeeded or failed. Lease expiry returns an unfinished attempt to the retry policy, up to two automatic retries. A new input revision creates a new hash and never reuses a stale result. Review: unreviewed -> approved or rejected, with additional review versions preserved. Job success does not imply human approval. PostgreSQL transaction boundaries cover job finalisation and run creation. Duplicate-worker and partial-write cases are mandatory tests.

## Data model
User(id, role, active); Customer(id, name, owner_id); Interaction(id, customer_id, channel, occurred_at, source_revision, source_hash); Turn(id, interaction_id, sequence, speaker, text); AnalysisJob(id, interaction_id, source_hash, method_version, config_hash, state, attempts, lease_until); AnalysisRun(id, job_id, topics, summary, source_refs, method_version, config_hash, created_at); Review(id, run_id, reviewer_id, decision, edited_summary, created_at); AuditEvent(id, actor_id, object_type, object_id, action, created_at).

A unique job key is (interaction_id, source_hash, method_version, config_hash). Review rows append rather than overwrite raw output. Turn sequence is unique within an interaction. Removal/retention policy is agreed before importing real records.

## Required diagram files
System context: diagrams/src/context.puml and readable exports.
Use cases: diagrams/src/use-cases.puml with UML actors, system boundary and explicit included/extended behaviour.
Draft components: diagrams/src/components.puml.
Additional sequence/data diagrams may follow during implementation. The required diagrams describe the proposed architecture and are not evidence that components already run.

## Design consistency
FR-01 maps to API access checks. FR-03 maps to capture/import. FR-05 and FR-08 map to the job/worker lifecycle. FR-06 maps to analysis validation and versioned runs. FR-07 maps to source inspection and append-only review. FR-09 maps to authorised export. The requirement traceability matrix records the full mapping.
