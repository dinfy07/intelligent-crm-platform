# Project proposal

## Project identity
Development of an Intelligent CRM Platform with Automated Customer Interaction Analysis

Astana IT University. Software Engineering. Group SE-2426. Supervisor: Arailym Orazova. Stage: first pre-defense candidate prepared on 19 October 2026 for the 24 October checkpoint.

| Team member | Accountable contribution |
| --- | --- |
| Yeshimkul Beybit | Frontend and visualisation |
| Shaikenov Danial | Backend and integrations |
| Saken Akhmediyar | AI/NLP, evaluation and QA |

## Problem statement
A staff member who needs to understand a customer's previous interaction must locate the record, read the text, identify the issue and verify the next step. We propose to investigate whether an integrated, source-linked analysis workflow can reduce this effort while preserving factual accuracy. The frequency, severity and preferred workflow of this problem remain hypotheses because the team has not yet interviewed users or agreed requirements with a client.

## Target users and boundaries
The initial user hypothesis is a small sales or customer-support team operating within one organisation. An analyst handles assigned customers. A manager reviews the team's interaction history and analyses. An administrator manages accounts and access settings. A specific organisation, purchase intention and willingness to adopt the platform have not been established.

## Aim
Develop and evaluate a CRM prototype that manages customer interactions and produces reviewable topic labels and short summaries with links to their source turns.

## Objectives
1. Validate the workflow through 3–5 discussions with user representatives or a substantive client agreement.
2. Define traceable functional and non-functional requirements with acceptance criteria.
3. Implement customer records, text interaction import, access control and analysis job tracking.
4. Compare a deterministic extractive baseline with a pretrained analysis method on a held-out set.
5. Provide a user interface for inspection, correction and approval of analysis results.
6. Evaluate factuality, topic tagging, key-fact coverage, task time and operational behaviour.

## Scope
Mandatory MVP: one organisation; analyst, manager and admin roles; customer cards; manual entry and JSON import of text interactions; source-linked topic tagging and summaries; explicit analysis states; human review; filtered search; JSON export; versioned runs and audit events. English-language evaluation is the initial controlled scope. Russian and Kazakh support requires separate labelled evaluation before any quality claim.

Optional after mandatory criteria: CSV adapter, richer analytics and a second language. Out of scope: telephone recording, automatic speech recognition, real-time call assistance, automatic messages to customers, payment processing, a full enterprise sales suite, training a large language model from scratch and production-scale availability guarantees.

## Engineering contribution and expected outcomes
The engineering work combines an object-level permission model, validated imports, asynchronous job lifecycle, source and model versioning, an analysis adapter, human review and a coherent UI. Expected deliverables are a reproducible prototype, documented API and data model, automated checks, an annotated evaluation set with provenance, experiment scripts and an honest limitations report. No experiment results or commercial superiority are claimed at this stage.

## Proposed research questions
RQ1: How do the extractive baseline and a pretrained summarisation method differ in factuality, key-fact coverage and topic macro-F1 on the same held-out interactions?
RQ2: Does the reviewed analysis workflow reduce median completion time for defined history-review tasks compared with reading the original interaction, without increasing task errors?
RQ3: Which error types, input lengths and topic classes cause failures?

The design draws on dialogue evaluation and factuality research [L03, L04, L06, L08, L09]. Any benefit remains to be measured. See the source register for publication URLs.
