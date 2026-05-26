# Skill Authoring

A skill is one `SKILL.md` file plus optional resources. This guide covers how to
write a `SKILL.md` that an agent follows reliably. For the directory anatomy,
see [Skill Format](./reference/skill-format).

## File frontmatter

Open the file with YAML frontmatter:

```yaml
---
name: git-commit-planner
description: Analyze git changes, split them into signed commits, and output a copy-paste plan. Use when the user asks to commit or stage changes.
metadata:
  author: your-handle
---
```

| Field             | Required | Purpose                                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------------------- |
| `name`            | yes      | Kebab-case identifier; matches the skill directory.                                   |
| `description`     | yes      | What the skill does and when to invoke it — the agent reads this to decide relevance. |
| `metadata.author` | no       | Attribution for the skill author.                                                     |

Write the `description` as capability plus trigger: state what the skill
produces, then the phrases that activate it.

## Body Structure

Order the body so the agent reads rules before steps:

1. **Hard Rules** — the never-do list and non-negotiable policy. Put safety
   limits first.
2. **Workflow** — numbered steps the agent walks through, each with the exact
   command or check.
3. **Output format** — what the agent hands back. For the example skill, that
   is a copy-paste command plan.

The shipped [`git-commit-planner`](../skills/git-commit-planner) follows this
shape: `Hard Rules`, then numbered sections `1. Branch` through `5. Plan`.

## Writing for Agents

- **Use imperative voice.** Address the agent directly: "Inspect staged
  changes," not "the agent should look at changes."
- **Prefer explicit examples over abstract rules.** Show the exact command in a
  fenced block instead of describing it in prose.
- **Respect a token budget.** Keep `SKILL.md` under roughly 1000 tokens. Move
  long material into `references/` so it loads on demand.

## Anti-Patterns

- **Do not teach the tool's basics.** A Git skill enforces commit policy; it
  does not explain what a commit is.
- **Do not inline long examples.** Link them from `references/` instead of
  enlarging `SKILL.md`.
- **Do not assume one shell.** Provide both bash and PowerShell forms when a
  command differs, as the example skill does.

After drafting, run the checks in [Validation](./validation).
