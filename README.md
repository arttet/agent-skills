# Agent Skills

[![CI](https://github.com/arttet/agent-skills/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/arttet/agent-skills/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-VitePress-blue.svg)](https://skills.arttet.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Portable, reusable skills for AI coding agents across different tools and workflows.

## 📥 Install

Install the skills with GitHub CLI:

```sh
gh skill install arttet/agent-skills
```

For other installation methods, see the documentation.

## 🧠 Skills

| Skill                                                      | What it does                                                                                                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`git-commit-planner`](skills/git-commit-planner/SKILL.md) | Analyzes changes and branch context, splits work into signed Conventional Commits, and outputs a copy-paste plan. Never commits or pushes. |

## 🔗 Project Resources

Useful project resources:

| Resource      | URL                         |
| ------------- | --------------------------- |
| Documentation | <https://skills.arttet.dev> |

## ⚙️ Management & Development

Prerequisites for local development:

| Tool                                    | Used for                                                          |
| --------------------------------------- | ----------------------------------------------------------------- |
| [`just`](https://github.com/casey/just) | Task runner; every `just <recipe>` in this README and CI.         |
| [`Bun`](https://bun.sh)                 | Docs site (VitePress build, markdownlint, cspell).                |
| [`Go`](https://go.dev)                  | `editorconfig-checker`, `actionlint`, `skill-validator` binaries. |
| [`uv`](https://docs.astral.sh/uv/)      | `yamllint` (and any future Python-based tooling).                 |

This project uses `just` as the primary task runner for development, validation,
documentation, and deployment workflows. Run `just help` for the full list of
recipes; see the [Commands reference](https://skills.arttet.dev/guide/contributors/commands) for details.

## 🪝 Optional Git Hooks

Git hooks run linting and formatting checks in parallel via Lefthook. Install locally:

```sh
bunx lefthook install
```

Run manually against your working tree:

```sh
bunx lefthook run pre-commit
```

## 📄 License

[MIT](LICENSE)
