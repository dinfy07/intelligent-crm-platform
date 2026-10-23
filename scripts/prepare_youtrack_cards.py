"""Join the historical plan to the verified tracker snapshot; no network writes."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
tasks=json.loads((root/'docs/youtrack_tasks.json').read_text())
live=json.loads((root/'docs/youtrack_live_2026-10-23.json').read_text())
issues={t['local_planning_id']:t for t in live['issues']}
parts=['# YouTrack task cards',f"Tracker snapshot verified {live['verified_on']}. Current IDs, owners and dates below come from the saved live mapping, not a fresh network query. Criteria and dependencies come from the original plan. Generating this file does not update YouTrack."]
for t in tasks:
 issue=issues[t['local_planning_id']]
 parts.append(f"## {issue['youtrack_id']} {t['summary']}\n\nHistorical planning key: {t['local_planning_id']}\nResponsible student: {issue['responsible_student']}\nAssignee: {issue['assignee_login']}\nPriority: {issue['priority']}\nDeadline: {issue['due_date']}\nState at snapshot: {issue['state']}\n\nAcceptance: {t['acceptance_criteria']}\n\nDependencies (historical planning keys): {t['dependencies']}\nDeliverable: {t['deliverable']}\n\nActual issue: {issue['url']}")
out=root/'docs/youtrack_task_cards.md';out.write_text('\n\n'.join(parts)+'\n');print(out)
