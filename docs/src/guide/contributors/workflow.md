# Development Workflow

This section is for contributors who want to modify existing skills or add new ones to the repository.

## Before You Start

Read these pages first:

- [Skill Format](../skill-format) — directory structure and file roles.
- [Create a Skill](../create-a-skill) — how to write `SKILL.md`.
- [Validate and Test](../validate-and-test) — how to check quality.

## Workflow

1. **Fork** the repository and create a branch.
2. **Create** a new directory under `skills/`.
3. **Write** `SKILL.md` and optional resources.
4. **Validate** — run `just validate` and `just evaluate`.
5. **Lint** — run `just lint` to check formatting.
6. **Document** — add a page under `docs/src/skills/` describing the skill.
7. **Update AGENTS.md** — add the skill to the list.
8. **Submit** a pull request.

## Repository Conventions

- Agent-wide rules live in `AGENTS.md`.
- `CLAUDE.md` and `GEMINI.md` are compatibility shims linking to `AGENTS.md`.
- Pull requests are validated by [CI](./ci-cd) for structure, patterns, and linting.

## Need Help?

See the main [Contributing Guide](https://github.com/arttet/agent-skills/blob/main/CONTRIBUTING.md) for details on fork/branch/PR workflow.
