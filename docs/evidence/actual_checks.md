# Actual preparation checks

Date: 19 October 2026. Checks below concern the local preparation package and the browser prototype. They do not establish production readiness, NLP quality or business value.

## Automated checks actually run

- Python unittest: 6 passed. Sources/use fields, verifiable mandatory requirements, honest local task IDs, editable/readable diagram files, API path-parameter declarations and uncollected evidence status.
- Node test runner: 6 passed. Source references and SHA-256 provenance, absent commitments, speaker and ordering preservation, malformed/oversized input rejection, safe text and fallback topic, deterministic output/fingerprint changes.
- Chromium browser checks via Playwright: 17 passed against http://127.0.0.1:9137. Analysis result, source highlight, separate approval, reload persistence, review filter, combined empty state, cleared stale detail, failure retry, required input, safe HTML-like text, JSON download, rejection, 390 px page width, mobile analysis bounds, visible mobile action, mobile search bounds and keyboard focus reaching a control.

Commands from the project root:

```bash
python3 -m unittest discover -s tests -v
node --test tests/baseline.test.cjs
python3 -m http.server 9137 --bind 127.0.0.1 --directory prototype
```

The browser test source is tests/browser_smoke.js, an async (page) function for Playwright CLI run-code. It resets only crm-diploma-prototype-v1 on the localhost origin, uses fictional data and exports docs/evidence/fixture_export.json. An npm Playwright CLI installation is a test tool, not a production dependency.

## Repairs made after observation

The initial filtered-empty state retained stale details; rendering now clears them. The initial mobile grid clipped content inside its container even though the page width check passed. The fix constrains grid tracks and the inbox, wraps the header/footer, and adds explicit element-bound checks. The full 17-check browser run passed after this repair. This is why a page-overflow check alone was insufficient.

## Artefact verification

Final DOCX files were rendered and their pages visually reviewed. All 21 slides were rendered and individually inspected. PPTX package, declared slide size/count, five native tables, Arial font encoding and first-party re-import checks passed. Russian speaker notes are included on all slides. Diagrams have editable PlantUML and SVG sources plus PNG exports. SVGs are authored design exports; PlantUML compilation in a local Java environment was not performed.

## Limits

No production API, backend access enforcement, trained model, load test, model benchmark, real-user experiment, accepted supervisor review or genuine student contribution history is claimed. Keyboard smoke checks establish focus navigation only; the team's full keyboard-only task evaluation remains a future requirement. Native PowerPoint/Word execution has not been verified. User discovery remains uncollected. YouTrack remains uncreated.


## 23 October 2026 refresh

The preceding sections record the 19 October checks and limitations. YouTrack now exists; the verified mapping is docs/youtrack_live_2026-10-23.json. GitHub access was refreshed separately in github_access_2026-10-23.json.

- Python unittest: 7 passed, including one-to-one mapping of the historical plan to real tracker IDs, assignees, dates and generated cards.
- Node baseline tests: 6 passed.
- The 17 browser checks above were run on 19 October and were not rerun for this documentation/status refresh; prototype behaviour did not change.
- Report: 32 rendered pages; the 4 changed pages inspected, and the remaining 28 pages match a fresh render of the original pixel-for-pixel. Russian guide: all 3 rendered pages inspected.
- Presentation: imported and edited existing native elements; all 21 slides rendered. Slides 18 and 20 inspected, the other 19 match the original pixel-for-pixel. Package, geometry, native tables, fonts and first-party import checks passed.
- No production NLP evaluation, user interviews, student peer approvals or supervisor feedback were supplied by this refresh.
