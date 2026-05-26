# Agent Skills

[![CI](https://github.com/arttet/agent-skills/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/arttet/agent-skills/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-VitePress-blue.svg)](https://skills.arttet.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Portable, reusable skills for AI coding agents across different tools and workflows.

## Install

Install the skills with GitHub CLI:

```sh
gh skill install arttet/agent-skills
```

For other installation methods, see the documentation.

## Skills

| Skill                                                      | What it does                                                                                                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`git-commit-planner`](skills/git-commit-planner/SKILL.md) | Analyzes changes and branch context, splits work into signed Conventional Commits, and outputs a copy-paste plan. Never commits or pushes. |

## Project Resources

Useful project resources:

| Resource      | URL                         |
| ------------- | --------------------------- |
| Documentation | <https://skills.arttet.dev> |

## Management & Development

Prerequisites for local development:

- [`just`](https://github.com/casey/just)
- [`Bun`](https://bun.sh)
- [`Go`](https://go.dev)
- [`uv`](https://docs.astral.sh/uv/)

This project uses `just` as the primary task runner for development, validation,
documentation, and deployment workflows.

### Justfile Commands

The Justfile provides a single command surface for common project workflows.

```sh
$ just help
Available recipes:
    default        # Run the help recipe by default
    help           # Show available recipes and their descriptions

    [Development]
    install        # Install dependencies
    fmt            # Format code
    lint           # Lint code
    check          # Check skills
    validate       # Validate skills
    evaluate *args # Evaluate skills
    ci             # Run CI checks

    [Documentation]
    docs:
        dev     # Serve docs
        build   # Build docs
        preview # Preview docs

    [Pull Requests]
    pr:
        create      # Create a new Pull Request
        review n="" # Ask Gemini to review the Pull Request
        view n=""   # View comments for the Pull Request

    [Deployment]
    deploy:
        list        # List Cloudflare Pages projects
        create name # Create a Cloudflare Pages project
        delete name # Delete a Cloudflare Pages project
```

## License

[MIT](LICENSE)
