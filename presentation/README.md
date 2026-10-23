# Editable presentation source

The final PowerPoint is deliverables/CRM_Predefense_1_EN.pptx. Tables and architecture diagrams are native editable PowerPoint elements. Every slide includes Russian speaker notes. Scientific links and official documentation links appear in notes and the source register.

build_deck.mjs uses @oai/artifact-tool 2.8.99 and Node.js. With that package available, run node presentation/build_deck.mjs from the project root. It writes a candidate PPTX and slide PNGs into presentation/render/. That build folder is excluded from version control. The candidate must undergo layout/package validation and visual inspection before replacing a final deliverable. This is a presentation build dependency, not a CRM frontend dependency.
