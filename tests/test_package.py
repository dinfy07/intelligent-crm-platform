import unittest,json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
class PackageChecks(unittest.TestCase):
 def test_sources_have_primary_urls_and_meaningful_use(self):
  sources=json.loads((ROOT/'docs/sources.json').read_text());self.assertGreaterEqual(len(sources),12)
  papers=[s for s in sources if s['type']=='scientific'];self.assertGreaterEqual(len(papers),8)
  self.assertEqual(len({s['id'] for s in sources}),len(sources))
  for s in sources:self.assertTrue(s['url'].startswith('https://'));self.assertTrue(s['used_in']);self.assertEqual(s['accessed'],'2026-10-19')
 def test_mandatory_requirements_are_verifiable(self):
  req=json.loads((ROOT/'docs/requirements.json').read_text())
  for group in req.values():
   for r in group:
    if r['priority']=='Must':self.assertGreater(len(r['acceptance']),50);self.assertTrue(r['verification'])
 def test_task_ids_are_local_and_not_fake_youtrack(self):
  tasks=json.loads((ROOT/'docs/youtrack_tasks.json').read_text());self.assertGreaterEqual(len(tasks),10)
  self.assertEqual({t['proposed_owner'] for t in tasks},{'Beybit','Danial','Akhmediyar'})
  for t in tasks:self.assertIsNone(t['youtrack_id']);self.assertTrue(t['acceptance_criteria']);self.assertTrue(t['deadline']);self.assertTrue(t['priority'])
 def test_live_tasks_map_once_to_the_historical_plan(self):
  tasks=json.loads((ROOT/'docs/youtrack_tasks.json').read_text())
  live=json.loads((ROOT/'docs/youtrack_live_2026-10-23.json').read_text())
  issues=live['issues']
  self.assertEqual(len(issues),len(tasks))
  self.assertEqual({i['local_planning_id'] for i in issues},{t['local_planning_id'] for t in tasks})
  self.assertEqual(len({i['youtrack_id'] for i in issues}),len(issues))
  accounts={a['student']:a['login'] for a in live['team_accounts']}
  for issue in issues:
   self.assertRegex(issue['youtrack_id'],r'^CRM-\d+$')
   self.assertEqual(issue['url'],'https://crm-se2426.youtrack.cloud/issue/'+issue['youtrack_id'])
   self.assertEqual(issue['assignee_login'],accounts[issue['responsible_student']])
   self.assertIn(issue['state'],live['columns'])
   self.assertEqual(issue['due_date'],'2026-10-24' if issue['youtrack_id']=='CRM-13' else '2026-10-23')
   self.assertIn(issue['url'],(ROOT/'docs/youtrack_task_cards.md').read_text())
 def test_required_diagrams_have_editable_and_readable_files(self):
  for name in ['context','use-cases','components']:
   self.assertTrue((ROOT/f'diagrams/src/{name}.puml').read_text().startswith('@startuml'))
   self.assertIn('<svg',(ROOT/f'diagrams/exports/{name}.svg').read_text())
   self.assertTrue((ROOT/f'diagrams/exports/{name}.png').stat().st_size>1000)
 def test_api_path_parameters_are_declared(self):
  api=json.loads((ROOT/'docs/api_contract.json').read_text())
  for path,operations in api['paths'].items():
   for op in operations.values():self.assertEqual(set(re.findall(r'\{([^}]+)\}',path)),{p['name'] for p in op.get('parameters',[])})
 def test_template_evidence_is_not_claimed_as_collected(self):
  self.assertIn('no completed user discussion',(ROOT/'docs/02_relevance_and_discovery.md').read_text())
  self.assertIn('not received',(ROOT/'docs/11_supervisor_feedback.md').read_text())
  self.assertIn('NOT RUN',(ROOT/'docs/evidence/evaluation_results_template.md').read_text())
if __name__=='__main__':unittest.main()
