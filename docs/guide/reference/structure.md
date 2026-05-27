# Repository Structure

This is the canonical layout of the repository. Other documents that need to
reference repository structure should link here instead of reproducing it.

::: tip Update Structure

If the structure below becomes outdated, regenerate it with:

```sh
eza . --tree --level=6 --all --git-ignore --ignore-glob='.git' --icons=never --color=never
```

:::

## Directory Structure

```text
.
├── .editorconfig
├── .envrc
├── .github
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   └── workflows
│       ├── cache-cleanup.yml
│       └── ci.yml
├── .gitignore
├── .lychee.toml
├── .markdownlint-cli2.yaml
├── .vale
│   └── styles
│       ├── AI
│       │   ├── Forbidden.yml
│       │   └── WeakWords.yml
│       └── config
│           └── vocabularies
│               └── Tech
│                   └── accept.txt
├── .vale.ini
├── .yamllint.yml
├── AGENTS.md
├── CLAUDE.md
├── cspell.json
├── docs
│   ├── .gitignore
│   ├── .vitepress
│   │   ├── config.mts
│   │   └── theme
│   │       ├── index.ts
│   │       └── style.css
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
│       ├── deployment.just
│       ├── docs.just
│       └── pr.just
├── README.md
├── skills
│   └── git-commit-planner
│       └── SKILL.md
└── trivy.yaml
```

For the layout of an individual skill directory, see
[Skill Format](./skill-format).
