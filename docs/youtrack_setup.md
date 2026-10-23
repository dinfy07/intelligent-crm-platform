# YouTrack setup and task mapping

## Actual state
Updated 23 October 2026. The user completed email confirmation and administrator sign-in. The project [Intelligent CRM Platform (CRM)](https://crm-se2426.youtrack.cloud/projects/CRM) and 14 issues (CRM-1–CRM-14) were created through the YouTrack interface. The saved task list and four-column board were verified after reloading. See [live mapping](youtrack_live_2026-10-23.json).

The file youtrack_tasks.json preserves the original preparation plan and original dates; its null IDs are historical. The live mapping records real IDs, current dates and verified tracker state. Each issue contains the responsible student's name and role, acceptance criteria, dependencies and deliverable path. Priority and date are real YouTrack fields. All Assignee fields are now populated and verified after reload: admin (Beybit) has CRM-1, CRM-4, CRM-8, CRM-11 and CRM-14; shaykenov.danialq (Danial) has CRM-2, CRM-5, CRM-6, CRM-7, CRM-10 and CRM-13; ahmediars06 (Akhmediyar) has CRM-3, CRM-9 and CRM-12. Both teammates were invited through YouTrack and appear in the project team with Contributor roles. Their invitation acceptance and mailbox delivery are not independently verified.

## Required setup
1. Open the [task list](https://crm-se2426.youtrack.cloud/projects/CRM/issues) or [Kanban board](https://crm-se2426.youtrack.cloud/agiles/204-1/218-1).
2. Danial and Akhmediyar need to accept their invitations and check project access. Their tasks are already assigned. Supervisor access is still outstanding and requires a confirmed account/email.
3. Use To Do → In Progress → Review → Done. Move work only as actual progress occurs. Test and Staging values remain available in the underlying Stage field for future use, but are not shown as board columns.
4. Use real task IDs in branches and commits, e.g. codex/CRM-7-architecture. Add the actual PR/commit link and verification notes to the issue. Another student reviews the change before merge.
5. Close issues only when their acceptance criteria are met. Interview, supervisor-review and contribution-history tasks remain open until real evidence exists.
6. Local README links and mapping have been updated. No Git commit or push was made for this setup.

## Ready-to-copy task cards
Generate a single Markdown task-card document with `python3 scripts/prepare_youtrack_cards.py`. The generator joins criteria and dependencies from the historical plan with real IDs, assignees and dates from the verified live snapshot. It does not create remote issues or transmit data.

## Official API reference
If authorised API access becomes available, follow https://www.jetbrains.com/help/youtrack/devportal/api-entity-Issue.html and the linked /api/issues resource. Retrieve project-specific fields and user IDs rather than guessing them. Keep access tokens outside Git. No API write or import has been performed by this package.
