# Validate and Test

`skill-validator` checks every skill before it merges. Run it locally with the
[`just`](./contributors/commands) recipes and resolve what it reports.

## What It Checks

| Check                | What it verifies                                      |
| -------------------- | ----------------------------------------------------- |
| `frontmatter` schema | `name` and `description` are present and well-formed. |
| Internal links       | Paths into `references/` and `assets/` resolve.       |
| Token count          | `SKILL.md` stays within its token budget.             |
| Content metrics      | Structure, directive precision, and scope discipline. |
| Contamination        | No leaked secrets or out-of-scope content.            |

## Run Validation

`just validate` runs structure, link, content, and contamination analysis.
`just check` adds the strict gate plus formatting checks. See
[Commands](./contributors/commands) for the full recipe list.

```sh
just validate
```

## Evaluate Quality

`just evaluate` scores skills with `skill-validator score evaluate` and prints
metrics you can document.

```sh
just evaluate
```

Use `--rescore` to force a fresh evaluation even when
cached scores exist.

```sh
just evaluate --rescore
```

Each metric measures a different aspect of skill quality:

- **Clarity** — how clearly the skill states its purpose and rules.
- **Actionability** — how directly an agent can follow the instructions.
- **Token efficiency** — how compact the skill is relative to its utility.

## Document Metrics

When you add a skill to the documentation, include the evaluation results so
readers know the skill's quality at a glance:

| Metric           | Score        |
| ---------------- | ------------ |
| Clarity          | 95%          |
| Actionability    | 88%          |
| Token efficiency | 1,240 tokens |

## Read and Resolve the Output

Each finding prints on one line with the file and the rule it broke. Resolve
each before opening a pull request:

- **Schema error** — add or correct the missing frontmatter field.
- **Broken link** — fix the path or remove the dead reference.
- **Over budget** — move detail into `references/` to shrink `SKILL.md`.

CI runs the same gate on every pull request; see [CI/CD](./contributors/ci-cd).
