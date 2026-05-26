# Repository Structure

This is the canonical layout of the repository. Other documents that need to
reference repository structure should link here instead of reproducing it.

::: tip Update Structure

If the structure below becomes outdated, regenerate it with:

```sh
eza . --tree --level=5 --git-ignore --icons=never --color=never
```

:::

## Directory Structure

```text
.
├── AGENTS.md
├── CLAUDE.md
├── cspell.json
├── docs
│   ├── bun.lock
│   ├── guide
│   │   ├── contributing.md
│   │   ├── development.md
│   │   ├── getting-started.md
│   │   ├── reference
│   │   │   ├── ci-cd.md
│   │   │   ├── commands.md
│   │   │   ├── index.md
│   │   │   ├── skill-format.md
│   │   │   └── structure.md
│   │   ├── skill-authoring.md
│   │   └── validation.md
│   ├── index.md
│   ├── package.json
│   ├── public
│   │   ├── github.svg
│   │   ├── logo-light.svg
│   │   └── logo.svg
│   ├── README.md
│   └── skills
│       ├── git-commit-planner.md
│       └── index.md
├── dprint.json
├── GEMINI.md
├── justfile
├── LICENSE
├── misc
│   └── justfiles
│       └── docs.just
├── README.md
├── skills
│   └── git-commit-planner
│       └── SKILL.md
└── trivy.yaml
```

For the layout of an individual skill directory, see
[Skill Format](./skill-format).
