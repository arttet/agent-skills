# Commands

Agent Skills uses [`just`](https://github.com/casey/just) as its task runner.
Run `just` (or `just help`) in the repository root to list every recipe.

## Development

| Command               | Description                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `just install`        | Install the toolchain (EditorConfig, markdown/spell, YAML, Actions, and skill-validation tools, plus Vale packages).   |
| `just fmt`            | Format code: `editorconfig-cli`, `dprint fmt`, and `just --fmt`.                                                       |
| `just lint`           | Lint code: markdownlint, yamllint, actionlint, cspell, and Vale.                                                       |
| `just check`          | Check skills and formatting: `skill-validator check --strict`, EditorConfig, `dprint check`, and `just --fmt --check`. |
| `just validate`       | Validate skills: structure, links, content, and contamination analysis.                                                |
| `just evaluate *args` | Score skills with `skill-validator score evaluate` (Claude CLI provider).                                              |
| `just links`          | Build the docs site and link-check it (plus root and skill Markdown) with lychee. Requires `lychee` installed.         |
| `just ci`             | Run the full local gate: `fmt`, `lint`, `check`, and `validate`.                                                       |

## Documentation

| Command             | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| `just docs dev`     | Serve the docs site with hot reload (set `DOCS_PORT` to change the port). |
| `just docs build`   | Build the static docs site into `docs/.vitepress/dist/`.                  |
| `just docs preview` | Preview the built docs site locally.                                      |

The CI pipeline mirrors the local gates; see [CI/CD](./ci-cd) for how these run
on GitHub Actions.
