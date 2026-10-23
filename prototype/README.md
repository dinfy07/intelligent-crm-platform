# Portable interaction prototype

Open index.html or run `python3 -m http.server 9137 --directory prototype` from repository root.

The fictional working name Clarity CRM is a UI label, not a registered brand or deployment claim. This prototype uses deterministic keyword rules and selected source turns. It has no trained model, server, authentication or production access controls. Data stay in this browser; no external network calls run.

Run `node --test tests/baseline.test.cjs` from repository root for baseline contract checks. See docs/08_ux_prototype.md for scenarios and limits. Production Vue/FastAPI/PostgreSQL components remain planned work.
