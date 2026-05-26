# Development Workflow

Agent Skills uses `just` as its primary task runner to ensure a consistent development experience.

## Core Philosophy

- **Portability:** Skills should work in any agent that can read and follow instructions from Markdown files.
- **Safety:** Skills emphasize planning and analysis over direct action, ensuring you remain in control of your system.
- **Efficiency:** Lean metadata (`SKILL.md`) is loaded upfront, while detailed references and examples are fetched only when needed.
- **Developer Experience:** Standardized structure and automated validation using the `just` task runner.

## Format Standard

This project uses the Agent Skills format as its portability baseline:

- [Agent Skills home](https://agentskills.io/home)
- [Agent Skills specification](https://agentskills.io/specification)

## Workflow Steps

1. **Create a Skill:** Create a new directory under `skills/`.
2. **Implement:** Add a `SKILL.md` and any necessary optional resources.
3. **Validate:** Run `just validate` to ensure your skill follows the required format.
4. **Lint:** Run `just lint` to check for common issues.
5. **Document:** Add a dedicated page for your skill under `docs/skills/`.
6. **Update AGENTS.md:** Add a short link to the skill in the `AGENTS.md` skills list.
