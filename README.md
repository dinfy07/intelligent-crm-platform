# Intelligent CRM Platform

Development of an Intelligent CRM Platform with Automated Customer Interaction Analysis.

Customer-facing teams need to reconstruct customer context from scattered messages. This project is intended for sales and support staff and their managers. It combines customer records, interaction history and AI-assisted analysis of customer communication. Expected outputs include topic tags, summaries and source references, with user review before saving.

The initial scope covers text interactions within one organisation. Voice processing and automatic outbound replies are outside this scope.

## Team

| Member | Responsibility |
| --- | --- |
| Yeshimkul Beybit | Frontend and visualisation |
| Shaikenov Danial | Backend and integrations |
| Saken Akhmediyar | AI/NLP and QA |

GitHub accounts: Beybit — `dinfy07`; Danial — `ZLHRS`; Akhmediyar — `B4rt0n1`.

Supervisor: Arailym Orazova. Software Engineering, SE-2426.

## Materials

- [Report PDF](deliverables/Report.pdf)
- [Editable report](deliverables/Report.docx)
- [Anonymous stakeholder feedback](deliverables/Stakeholder_Feedback.docx)
- [YouTrack board and tasks PDF](deliverables/YouTrack.pdf)
- [Diagram sources](diagrams/src)
- [Diagrams](diagrams/exports)

## Prototype

The current browser prototype uses fictional records, deterministic text analysis and browser storage. The planned application stack is Vue 3, FastAPI and PostgreSQL.

Open [prototype/index.html](prototype/index.html), or run from the repository root:

```sh
python3 -m http.server 9137 --directory prototype
```

Then open http://127.0.0.1:9137.

Select an interaction and run analysis. Open a source reference to inspect the corresponding message, edit the summary, approve or reject it, and export the result as JSON. Search and the review filter select the visible customer interactions.

The current method is `keyword-extractive-v2`: topics use message text rather than speaker names, blank turns are rejected, and truncated summaries stay within 120 words. Existing browser records retain their original result version until analysis is run again. Keyword matches do not resolve negation or prove factual completeness.

## Checks and demonstration

Baseline checks use the built-in Node.js test runner (verified with Node.js 24):

```sh
node --test tests/baseline.test.cjs
```

For browser checks, keep the local HTTP server above running, then run in a second terminal with Python 3 and npm/npx available:

```sh
python3 tests/run_browser_smoke.py
```

The runner obtains Playwright CLI through npx and uses a dedicated browser session. If no Chromium browser is available, install the browser using Playwright CLI before retrying. It clears only the prototype storage key in that session and exercises synthetic records: analysis, source inspection, validation, approval/rejection, persistence, filtered selection, retry and export. It also checks 390, 768 and 1440 px layouts. Screenshots, an example export and the result record are saved under the ignored `build/predefense-checks-2026-10-24/` directory. These checks do not establish model quality, backend security or user benefit.

For the pre-defense demo: show the fictional-data notice; analyse one interaction; inspect a source reference; edit and approve the reviewed summary; filter approved records; export the raw and reviewed values; then show retry and Method & limits. The component diagram describes the planned API, database and worker; those server components are not implemented in this prototype.

## Project tracking

[YouTrack](https://crm-se2426.youtrack.cloud/projects/CRM/issues) · [Board](https://crm-se2426.youtrack.cloud/agiles/204-1/218-1)

Changes are linked to YouTrack issues and submitted from task branches through pull requests. Another team member reviews each change before it is merged. For delegated AI-assisted preparation, the commit author records the responsible module owner and the commit body states the assistance; the committer records who applied the change. Such attribution does not establish independent student work or completed peer review. Students must explain and validate the changes assigned to them.
