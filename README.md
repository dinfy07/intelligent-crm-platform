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

Supervisor: Arailym Orazova. Software Engineering, SE-2426.

## Materials

- [Report](deliverables/Report.docx)
- [Anonymous stakeholder feedback](docs/evidence/stakeholder_feedback.json)
- [Diagram sources](diagrams/src)
- [Diagrams](diagrams/exports)

## Prototype

The current browser prototype uses fictional records, deterministic text analysis and browser storage. The planned application stack is Vue 3, FastAPI and PostgreSQL.

Open [prototype/index.html](prototype/index.html), or run from the repository root:

```sh
python3 -m http.server 9137 --directory prototype
```

Then open http://127.0.0.1:9137.

## Project tracking

[YouTrack](https://crm-se2426.youtrack.cloud/projects/CRM/issues) · [Board](https://crm-se2426.youtrack.cloud/agiles/204-1/218-1)
