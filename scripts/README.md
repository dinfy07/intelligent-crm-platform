# Local maintenance scripts

prepare_youtrack_cards.py joins historical acceptance criteria with the verified 23 October tracker snapshot, including real issue IDs, assignees and dates. It does not create or update remote issues.

build_documents.py rebuilds the English DOCX report and Russian defence guide from docs/ and diagrams/exports/. Requires Python and python-docx. Re-render and inspect all changed pages after rebuilding.

Presentation source and build instructions are in presentation/. Diagram sources and editable SVG exports are in diagrams/. PlantUML sources must be rendered using an installed PlantUML environment after substantive diagram changes; the supplied SVGs are editable design exports.
