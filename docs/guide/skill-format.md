# Skill Format

[Agent Skills](https://agentskills.io/home) is a collection of portable, reusable skills for AI agents. Each
skill is a self-contained directory under `skills/`. A skill needs only a
`SKILL.md`; the other files are optional and loaded on demand.

```text
skills/<name>/
  SKILL.md      # required: name, description, and concise instructions
  references/   # optional: details loaded only when needed
  scripts/      # optional: deterministic helpers
  assets/       # optional: reusable output resources
```

## File Roles

| Path          | Role                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ |
| `SKILL.md`    | Entry point: skill name, description, and the hard rules an agent follows. Loaded upfront. |
| `references/` | Specs and rules pulled in only when a task needs them.                                     |
| `scripts/`    | Deterministic helpers the skill can run.                                                   |
| `assets/`     | Worked examples and reusable output files.                                                 |

## Keep `SKILL.md` Lean

Lean metadata is loaded upfront, so put only non-obvious workflow rules in
`SKILL.md`. Move bulky examples, specs, and reusable files into the optional
resources above, and reference them only when they are truly needed.

For where these directories sit in the wider repository, see
[Repository Structure](./contributors/structure).
