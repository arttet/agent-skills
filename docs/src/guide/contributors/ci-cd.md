# CI/CD

Continuous integration runs on GitHub Actions
([`.github/workflows/ci.yml`](https://github.com/arttet/agent-skills/blob/main/.github/workflows/ci.yml)).
Every pull request must pass the Stage 1 quality gates; merges to `main` then
deploy the documentation.

## Triggers

- **Pull request** — runs all Stage 1 gates.
- **Push to `main`** — runs Stage 1, then deploys GitHub Pages.
- **Schedule** — daily at 02:00 UTC.
- **Manual** — via `workflow_dispatch`.

## Stage 1: Quality Gates

These jobs run in parallel; all must pass.

| Gate            | Checks                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Format          | EditorConfig, `dprint`, and `just --fmt --check`.                                                            |
| Lint            | markdownlint, yamllint, actionlint, cspell, and Vale.                                                        |
| Security        | Semgrep (OSS), Trivy (filesystem scan + SARIF upload), Zizmor, and a ClamAV malware scan.                    |
| Documentation   | Builds the site with Bun, runs the lychee link check, and uploads the Cloudflare and GitHub Pages artifacts. |
| Validate Skills | `skill-validator check --strict` against `skills/`.                                                          |

Most of these mirror the local [`just`](./commands) recipes: `just ci` runs
`fmt`, `lint`, `check`, and `validate` before you push.

## Stage 2: Deploy

The **Deploy GH Pages** job publishes `docs/.vitepress/dist/` to GitHub Pages.
It runs only on a push to `main` (not on schedule or from Dependabot) and only
after every Stage 1 gate succeeds.

## Other Workflows

- **`cache-cleanup.yml`** — prunes stale Actions caches.
- **Dependabot** (`.github/dependabot.yml`) — opens dependency-update pull
  requests, which run through the same Stage 1 gates.
