"""Run the synthetic prototype checks through Playwright CLI on localhost."""

import argparse
import json
import os
from pathlib import Path
import subprocess
from urllib.parse import urlparse


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--url', default='http://127.0.0.1:9137')
    parser.add_argument('--session', default='crm-predefense-checks')
    parser.add_argument('--skip-open', action='store_true')
    args = parser.parse_args()
    parsed = urlparse(args.url)
    if parsed.scheme != 'http' or parsed.hostname not in ('localhost', '127.0.0.1', '::1'):
        parser.error('Use the local prototype HTTP server, not a remote site.')

    root = Path(__file__).resolve().parents[1]
    artifacts = root / 'build/predefense-checks-2026-10-24'
    artifacts.mkdir(parents=True, exist_ok=True)
    cli = ['npx', '--yes', '--package', '@playwright/cli', 'playwright-cli', f'--session={args.session}']

    def run(*command):
        result = subprocess.run(cli + list(command), cwd=root, capture_output=True, text=True,
                                env=os.environ | {'npm_config_loglevel': 'error'})
        (artifacts / f'{command[0]}.log').write_text(result.stdout + result.stderr)
        if result.stderr:
            print(result.stderr, end='')
        if command[0] != 'run-code':
            print(result.stdout, end='')
        if result.returncode or '### Error' in result.stdout:
            raise RuntimeError(f'Playwright CLI failed: see {artifacts / (command[0] + ".log")}')
        return result.stdout

    if not args.skip_open:
        run('open', args.url)
    output = run('run-code', (root / 'tests/browser-smoke.js').read_text())
    (artifacts / 'browser-checks.log').write_text(output)
    result_text = output.split('### Result\n', 1)[1].split('\n###', 1)[0].strip()
    result = json.loads(result_text)
    result['fixtureExportChecked'] = False
    payload = json.loads((artifacts / 'fixture-export.json').read_text())
    assert payload['prototype'] is True and payload['synthetic'] is True
    assert payload['analysis']['method'] == 'keyword-extractive-v2'
    assert payload['review']['decision'] == 'approved'
    assert payload['analysis']['summary'] != payload['review']['text']
    assert payload['interaction']['id'] == 'DEMO-01'
    result['fixtureExportChecked'] = True
    (artifacts / 'browser-checks.json').write_text(json.dumps(result, indent=2) + '\n')
    print(f"Passed {result['checksPassed']} browser checks and the exported JSON check.")


if __name__ == '__main__':
    main()
