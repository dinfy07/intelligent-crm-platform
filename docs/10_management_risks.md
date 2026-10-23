# Project management and risks

## Responsibility and review

Beybit owns frontend, UX, discovery coordination and presentation flow. Danial owns backend, integrations, storage and architecture. Akhmediyar owns analysis, evaluation and platform QA. Every student owns module-level tests, documentation and an identifiable account. Proposed review rotation: Danial reviews frontend integration, Akhmediyar reviews backend acceptance, Beybit reviews analysis output usability. A task owner does not substitute for a completed contribution.

## Milestones to the checkpoint

| Date | Planned outcome |
| --- | --- |
| 19 Oct | Research-backed candidate docs, diagrams, portable prototype and repository baseline |
| 20 Oct | User recruitment/discussions, real YouTrack setup and scope decisions |
| 21 Oct | Critical source/technology review and requirements revisions |
| 22 Oct | Diagram/prototype review and evaluation protocol agreement |
| 23 Oct | Actual supervisor comments, peer revisions and presentation rehearsal |
| 24 Oct | Access check, evidence audit and frozen submission tag |

## Planned tasks

| Local ID | Work item | Proposed owner | Priority | Deadline |
| --- | --- | --- | --- | --- |
| PLN-01 | Validate customer workflow | Beybit | Critical | 2026-10-20 |
| PLN-02 | Approve problem and MVP boundary | Danial | Critical | 2026-10-20 |
| PLN-03 | Review scientific evidence | Akhmediyar | High | 2026-10-21 |
| PLN-04 | Confirm existing system comparison | Beybit | High | 2026-10-21 |
| PLN-05 | Review technology ADRs | Danial | High | 2026-10-21 |
| PLN-06 | Baseline requirements and traceability | Danial | Critical | 2026-10-22 |
| PLN-07 | Review required UML diagrams | Danial | High | 2026-10-22 |
| PLN-08 | Validate prototype with users | Beybit | High | 2026-10-22 |
| PLN-09 | Approve evaluation protocol | Akhmediyar | High | 2026-10-22 |
| PLN-10 | Set up YouTrack and map tasks | Danial | Critical | 2026-10-20 |
| PLN-11 | Collect supervisor review | Beybit | Critical | 2026-10-23 |
| PLN-12 | Review source links and contracts | Akhmediyar | High | 2026-10-23 |
| PLN-13 | Team review and checkpoint release | Danial | Critical | 2026-10-24 |
| PLN-14 | Rehearse English presentation | Beybit | High | 2026-10-23 |

The table above preserves the original preparation schedule. Updated 23 October 2026: the real project CRM and 14 tasks have been created. PLN-01–PLN-14 map in order to CRM-1–CRM-14. Current dates are 23 October for preparatory tasks and 24 October for CRM-13. See [live mapping](youtrack_live_2026-10-23.json). All 14 tasks are assigned to the three actual accounts; teammate invitations were submitted. Acceptance and access from their accounts remain unverified.

## Risk register

| Risk | Likelihood / impact | Owner | Mitigation and trigger |
| --- | --- | --- | --- |
| No target users or client | High / High | Beybit | Recruit immediately. If no evidence by 22 Oct, disclose the gap and narrow the claim to a technical prototype. |
| No approved domain dataset | High / High | Akhmediyar | Use synthetic/public data only with accurate labels. Do not infer market need or real-world accuracy. |
| Inaccurate summaries | High / High | Akhmediyar | Source references, human review, factual error taxonomy and held-out evaluation. |
| Scope exceeds three-person capacity | Medium / High | Danial | English text-only MVP, modular API/worker and exclusions. Cut optional analytics/connectors first. |
| Backend stack mismatch | Medium / Medium | Danial | Review ADR-02 before implementation and demonstrate a small API slice. |
| Disclosure of customer records | Medium / High | Danial | Keep real data outside Git, define permissions/retention and disable external inference by default. |
| Missing supervisor evidence or tracker follow-through | High / High | Beybit | Tracker is configured; verify invitation acceptance and request substantive supervisor review. A template is not evidence. |
| Apparent but untraceable contributions | Medium / High | All | Each student makes real reviewed changes from their own account. Do not backdate or fabricate commits. |
| Vendor/model version drift | Medium / Medium | Akhmediyar | Record access dates, exact model revisions and configuration. Recheck before final comparison. |

## Repository workflow

Use one repository throughout the diploma; it is public as checked on 23 October. Keep customer records, personal interview data and secrets outside Git. Add reviewers only after exact usernames and access levels are known. main is the reviewed baseline. Work on codex/<actual-youtrack-id>-description branches, submit PRs with acceptance evidence and obtain another member’s review before merging. Use actual CRM issue IDs from the live mapping.

## Contribution and release integrity

The current preparation baseline is AI-assisted material created at the actual preparation date. It does not demonstrate progressive student development. Students must review, revise and understand it, then record genuine contributions and reviews. Never impersonate a student, create fake review comments or backdate commits. Freeze pre-defense-1 only when the team selects its actual submission version. Do not move or replace a previously submitted tag.

## Actual access and publication state
A minimal initial scaffold was pushed as e5cfad1, with Codex as the author. On 23 October the user explicitly authorised an AI-assisted preparation branch and one PR for CRM-13. This candidate still requires student review; no peer approval, merge or submission tag is claimed. GitHub API checks on 23 October show a public repository, B4rt0n1 with write access and ZLHRS with a pending write invitation. Public reading is available; assigned supervisor reviews require their exact account. See RU_team_handoff.md for the division of review and revision work.
