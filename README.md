# Intelligent CRM Platform

**English:** Development of an intelligent CRM platform for automated analysis of customer interactions

**Қазақша:** Клиенттермен өзара әрекеттесуді автоматты түрде талдауға арналған интеллектуалды CRM-платформасын әзірлеу.

**Русский:** Разработка интеллектуальной CRM-платформы с автоматизированным анализом взаимодействий с клиентами

Customer-facing teams need to reconstruct customer context from scattered messages. This project is intended for sales and support staff and their managers. It combines customer records, interaction history and AI-assisted analysis of customer communication. Expected outputs include topic tags, summaries and source references, with user review before saving.

The initial scope covers text interactions within one organisation. Voice processing and automatic outbound replies are outside this scope.

## Team

| Member | Responsibility |
| --- | --- |
| Yeshimkul Beybit | Frontend and visualisation |
| Shaikenov Danial | Backend and integrations |
| Saken Akhmediyar | AI/NLP and QA |

Supervisor: Arailym Orazova. Software Engineering, SE-2426.

## Contributions

- Yeshimkul Beybit: browser prototype, project report and stakeholder feedback documents — [CRM-13](https://crm-se2426.youtrack.cloud/issue/CRM-13), [CRM-14](https://crm-se2426.youtrack.cloud/issue/CRM-14), [commit](https://github.com/dinfy07/intelligent-crm-platform/commit/22e2cebb31a834833fa5ad91a9bdffacfcfb9d9b), [PR 4](https://github.com/dinfy07/intelligent-crm-platform/pull/4).
- Shaikenov Danial: component diagram clarifying API access, durable jobs and status polling, with matching report documents — [CRM-7](https://crm-se2426.youtrack.cloud/issue/CRM-7), [commit](https://github.com/dinfy07/intelligent-crm-platform/commit/2c7deeaba6391ee4bf2936362cdda91d843ede24), [PR 7](https://github.com/dinfy07/intelligent-crm-platform/pull/7).
- Saken Akhmediyar: topic classification based on message text and rejection of blank speaker or message fields — [CRM-9](https://crm-se2426.youtrack.cloud/issue/CRM-9), [commit](https://github.com/dinfy07/intelligent-crm-platform/commit/eaa3af4c978c096b5c2661621d7b420d1e0c1026), [PR 5](https://github.com/dinfy07/intelligent-crm-platform/pull/5).

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

## Project tracking

[YouTrack](https://crm-se2426.youtrack.cloud/projects/CRM/issues) · [Board](https://crm-se2426.youtrack.cloud/agiles/204-1/218-1)

Changes are linked to YouTrack issues and submitted from task branches through pull requests. Another team member reviews each change before it is merged. Each student uses their own account and commits their own work.
