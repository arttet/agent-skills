# Development Workflow

This page covers how to build a skill in this repository — from creating the
directory through to opening a pull request.

## Core Philosophy

- **Portability** — a skill runs in any agent that reads instructions from
  Markdown files.
- **Safety** — skills plan and analyze rather than act, so you stay in control
  of your system.
- **Efficiency** — a lean `SKILL.md` loads upfront; detailed references and
  examples load only when a task needs them.
- **Developer experience** — a standardized structure and automated validation
  keep every skill consistent.

## Format Standard

This project follows the Agent Skills format as its portability baseline:

- [Agent Skills home](https://agentskills.io/home)
- [Agent Skills specification](https://agentskills.io/specification)

## Workflow Steps

1. **Create** — add a new directory under `skills/`.
2. **Implement** — write the `SKILL.md` and any optional resources. See
   [Skill Authoring](./skill-authoring).
3. **Validate** — confirm the skill matches the format. See
   [Validation](./validation).
4. **Lint** — check formatting and prose against the project rules.
5. **Document** — add a page for the skill under `docs/skills/`.
6. **Update AGENTS.md** — add a short link to the skill in the `AGENTS.md` list.
