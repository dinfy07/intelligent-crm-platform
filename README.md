# Intelligent CRM Platform

Development of an Intelligent CRM Platform with Automated Customer Interaction Analysis

## Problem and users
We investigate whether customer-facing staff can reconstruct interaction context faster using a source-linked analysis and review workflow. Target users are analysts and managers in a small sales/support team. Local demand is a hypothesis: no discovery interviews or client agreement have been completed.

## Expected outcome and scope
A text-first CRM MVP with customer records, interaction import, topic tagging, concise summaries, source references, human review and evaluation. One organisation and English-language quality evaluation form the initial controlled scope. Voice recording, speech recognition, automatic replies and enterprise-scale deployment are excluded.

## Team and supervisor
| Member | Responsibility |
| --- | --- |
| Yeshimkul Beybit | Frontend and visualisation |
| Shaikenov Danial | Backend and integrations |
| Saken Akhmediyar | AI/NLP, evaluation and QA |

Supervisor: Arailym Orazova. Group SE-2426. No substantive supervisor review of this package is recorded yet.

## Current state (materials prepared 19 October; tracker updated 23 October 2026)
Prepared: proposal, critical literature review, four-system/eight-criterion comparison, five technology decisions, initial requirements, three editable UML diagrams, a runnable portable prototype, evaluation protocol, planned tasks and an English presentation with Russian explanations.

The prototype implements a deterministic browser baseline with fictional data. It has no production API, trained model or server-side authorisation. Full application implementation is not required for the 24 October stage. YouTrack project and 14 tasks were created on 23 October. Team accounts have been invited and tasks assigned. Invitation acceptance/access checks, user interviews, progressive contributions by each student and supervisor feedback remain open. See [submission checklist](docs/13_submission_checklist.md).

## Proposed technologies
Vue 3 + TypeScript for the eventual UI, FastAPI/Python for API and analysis, PostgreSQL for persistent entities and job state, HTTP JSON/polling for component communication. Final model selection follows evaluation. [Alternatives and trade-offs](docs/05_technology_comparison.md).

## Run the prototype
No dependency installation or network API is required. Open [prototype/index.html](prototype/index.html) directly or run from repository root:

```bash
python3 -m http.server 9137 --directory prototype
```

Open http://127.0.0.1:9137. The prototype uses only fictional fixtures and browser storage where available. Reset removes only this prototype's stored state. It must not be used for real customer records.

## Run checks

```bash
python3 -m unittest discover -s tests -v
node --test tests/baseline.test.cjs
```

The checks cover package consistency and the portable baseline contract. Browser smoke checks and screenshots are recorded separately in docs/evidence/actual_checks.md. Passing these checks does not validate the proposed production requirements or prove user benefit.

## Documentation map
[Proposal](docs/01_proposal.md) · [Discovery](docs/02_relevance_and_discovery.md) · [Literature](docs/03_literature_review.md) · [Existing systems](docs/04_existing_systems.md) · [Technology](docs/05_technology_comparison.md) · [Requirements](docs/06_requirements.md) · [Architecture](docs/07_architecture.md) · [Prototype walkthrough](docs/08_ux_prototype.md) · [Evaluation](docs/09_verification_evaluation.md) · [Management](docs/10_management_risks.md) · [Supervisor log](docs/11_supervisor_feedback.md) · [Sources](docs/12_sources.md) · [Traceability](docs/traceability.md).

Editable diagrams are in diagrams/src. Readable exports are in diagrams/exports. Final report and slides are in deliverables. Russian defence explanations are in docs/RU_defense_notes.md.

## Tracker and contribution status
YouTrack project: [Intelligent CRM Platform (CRM)](https://crm-se2426.youtrack.cloud/projects/CRM). [Task list](https://crm-se2426.youtrack.cloud/projects/CRM/issues) · [CRM — Pre-defense 1 board](https://crm-se2426.youtrack.cloud/agiles/204-1/218-1).

Verified on 23 October 2026: 14 issues, CRM-1–CRM-14, with descriptions, role-based responsibilities, acceptance criteria, priorities and date fields. The board has To Do, In Progress, Review and Done columns. All issues remain in To Do. Preparatory tasks target 23 October; CRM-13 targets 24 October. Responsibilities are stated in descriptions and actual Assignee fields: admin (Beybit) has 5 tasks, shaykenov.danialq (Danial) has 6, ahmediars06 (Akhmediyar) has 3. Both teammates were invited with Contributor roles; invitation acceptance is not yet verified. Historical PLN keys map in order to CRM issue numbers; see [live mapping](docs/youtrack_live_2026-10-23.json) and [tracker instructions](docs/youtrack_setup.md). The original planning JSON remains a historical preparation snapshot.

Repository: https://github.com/dinfy07/intelligent-crm-platform. GitHub API checked on 23 October 2026: the repository is public, B4rt0n1 (Saken Akhmediyar) has write access, and ZLHRS (Shaikenov Danial) has a pending write invitation. Supervisor and committee can read public materials; their exact accounts are still needed for assigned reviews. Each student must make actual meaningful contributions from their own account and participate in PR review. See [CONTRIBUTING](CONTRIBUTING.md). No past contributions or approvals are fabricated.

Submission tag: not yet created. Select and freeze pre-defense-1 only for the actual reviewed checkpoint submission.

## Preparation PR and student commits
On 23 October the user authorised publishing this AI-assisted preparation package in the branch `codex/CRM-13-pre-defense-package` and opening one PR against `main`. This is a review candidate for [CRM-13](https://crm-se2426.youtrack.cloud/issue/CRM-13), not an approved submission. Each student must understand and meaningfully revise their own area, then create their own commits and participate in peer review. The PR must be reviewed before merge; the final submission tag remains open. See [Russian team handoff](docs/RU_team_handoff.md).

GitHub Actions runs the Python package checks and Node baseline tests on pushes and PRs. These automated checks complement, but do not replace, a team member's substantive review.
