# AGENTS.md

## Purpose

This repository builds portable, reusable **skills for AI coding agents** —
packaged capabilities an agent loads to perform a task consistently and safely,
written once in a vendor-neutral format and shared across every supported agent.

## Skills

The list below links to repository skills under `skills/*/SKILL.md`.

<skills>
- [git-commit-planner](skills/git-commit-planner/SKILL.md)
</skills>

## Skill Structure (`skills/`)

Each skill is a self-contained directory:

- `SKILL.md`: Entry point with the skill name, description, and hard rules.
- `references/`: Optional specs and rules loaded on demand.
- `assets/`: Optional worked examples and supporting files.

For commit planning, staging, branch naming, or "what should I commit", use the
`git-commit-planner` skill above. Do not improvise a commit plan without it.

For creating or updating skills, use the `skill-creator` skill.

For repository layout, link to `docs/guide/reference/structure.md`; do not duplicate
the directory tree in other docs or prompts.

## Rules (apply whenever git is touched)

- All git analysis: GIT_TERMINAL_PROMPT=0 GIT_EDITOR=: git --no-pager
- GIT_PAGER=cat and PAGER=cat are forbidden
- Always analyze staged + unstaged + untracked before any commit plan
- Run sanity checks (secrets, debug logging, formatting churn) before splitting
- All proposed commits must include -S
- --no-gpg-sign is forbidden
- git push --force is forbidden; use --force-with-lease
- agent/* branches are ephemeral; first command in the plan must be git switch -c <branch> main
- git switch -c must always include explicit base (main)
- First push to new branch: git push -u origin <branch>
- For commit planning: use git-commit-planner skill
