# Create a Skill

A skill is one `SKILL.md` file plus optional resources. This guide shows how to
write a skill that any agent can follow reliably.

::: tip Use Your Agent's Skill Creator

Most agents have a built-in skill creator that can scaffold a new skill for you.
If you prefer to let the agent generate the initial structure, see [Using Skills](./using-skills) for how to activate it in your environment.

:::

## Quick Start

Create a directory and a `SKILL.md`:

```sh
mkdir skills/my-skill
cd skills/my-skill
touch SKILL.md
```

Open `SKILL.md` and add frontmatter:

```yaml
---
name: my-skill
description: What this skill does and when the agent should use it.
metadata:
  author: your-handle
---
```

| Field             | Required | Purpose                                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------------------- |
| `name`            | yes      | Kebab-case identifier; matches the skill directory.                                   |
| `description`     | yes      | What the skill does and when to invoke it — the agent reads this to decide relevance. |
| `metadata.author` | no       | Attribution for the skill author.                                                     |

## Body Structure

Order the body so the agent reads rules before steps:

1. **Hard Rules** — the never-do list and non-negotiable policy. Put safety
   limits first.
2. **Workflow** — numbered steps the agent walks through, each with the exact
   command or check.
3. **Output format** — what the agent hands back.

The shipped [`git-commit-planner`](../skills/git-commit-planner) follows this
shape: `Hard Rules`, then numbered sections `1. Branch` through `5. Plan`.

## Writing Tips

- **Use imperative voice.** Address the agent directly: "Inspect staged
  changes," not "the agent should look at changes."
- **Show examples.** Use fenced code blocks instead of describing commands in prose.
- **Stay concise.** Keep `SKILL.md` under roughly 1000 tokens. Move long material
  into `references/` so it loads on demand.

## Common Mistakes

- **Do not teach the tool's basics.** A Git skill enforces commit policy; it
  does not explain what a commit is.
- **Do not inline long examples.** Link them from `references/` instead of
  enlarging `SKILL.md`.
- **Do not assume one shell.** Provide both bash and PowerShell forms when a
  command differs.

After drafting, run the checks in [Validate and Test](./validate-and-test).
