# UX prototype and walkthrough

## Audience and primary task
A customer-facing analyst needs to identify the issue and next step from a previous interaction, then check that an automated summary matches its source. The main action is Analyse interaction, followed by Review and approve. Search and source import support this flow. Aggregate insights are secondary.

## Scope of the runnable prototype
Open prototype/index.html directly, or run python3 -m http.server 9137 --directory prototype. The prototype runs locally without network calls or external libraries. Fictional fixtures demonstrate customers, interaction text, topic tagging, extractive summaries, source references, review/edit/approve/reject, a failed-analysis recovery state, search, filters and JSON export. Data persist only in the browser's local storage where available. Reset restores fictional examples.

The analysis is a deterministic rule-based/extractive baseline. It is not a pretrained or hosted language model. Prototype role labels do not enforce backend authorisation. Performance, security and quality targets for the production architecture remain unmeasured.

## Key scenarios
UX-01 Find a customer and select a text interaction. Inspect ordered speaker turns.
UX-02 Run analysis. See the progress state, resulting topics and a short extractive summary with source-turn links.
UX-03 Select a source reference. Check the original turn, edit the review text and approve or reject. The raw summary remains available.
UX-04 Add an interaction. Reject missing name/text, save valid text and analyse it.
UX-05 Inspect a failed run. Retry after the displayed error and verify that success still requires a separate review action.
UX-06 Search/filter and export the selected interaction with provenance and review state.

## Design decisions
A restrained slate/indigo workspace keeps the conversation as the main content, with the analysis panel beside it. Explicit labels distinguish raw output from reviewed text. Status words supplement colours. Controls have visible keyboard focus, meaningful labels, usable touch targets and responsive layouts. The interface uses synthetic records only and keeps its baseline label visible.

## What to show at the checkpoint
Demonstrate one full import-to-review flow, one validation error, one failure/retry and one export. Show editable source and link these scenarios to FR-03, FR-04 and FR-06–FR-09. Do not claim the prototype proves local demand, learned NLP quality or backend access control.
