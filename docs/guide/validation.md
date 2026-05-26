# Validation

`skill-validator` checks every skill before it merges. Run it locally with the
[`just`](./reference/commands) recipes and resolve what it reports.

## What It Checks

| Check                | What it verifies                                      |
| -------------------- | ----------------------------------------------------- |
| `frontmatter` schema | `name` and `description` are present and well-formed. |
| Internal links       | Paths into `references/` and `assets/` resolve.       |
| Token count          | `SKILL.md` stays within its token budget.             |
| Content metrics      | Structure, directive precision, and scope discipline. |
| Contamination        | No leaked secrets or out-of-scope content.            |

## Run It Locally

```sh
just validate
```

`just validate` runs structure, link, content, and contamination analysis.
`just check` adds the strict gate plus formatting checks. See
[Commands](./reference/commands) for the full recipe list.

## Read and Resolve the Output

Each finding prints on one line with the file and the rule it broke. Resolve
each before opening a pull request:

- **Schema error** — add or correct the missing frontmatter field.
- **Broken link** — fix the path or remove the dead reference.
- **Over budget** — move detail into `references/` to shrink `SKILL.md`.

CI runs the same gate on every pull request; see [CI/CD](./reference/ci-cd).
