---
name: git-commit-planner
description: Analyze git changes, check branch context including agent worktrees, split into signed Conventional Commits, and output an exact copy-paste plan. Never commit or push. Use when the user asks to commit, stage changes, craft a commit message, or split work into multiple commits.
---

Enforce this repository's commit policy. Do not teach Git or execute mutating
commands; output mutating commands only as a copy-paste plan for the user.

## Hard Rules

- Inspect staged, unstaged, and untracked changes before planning.
- Run analysis as:

```bash
GIT_TERMINAL_PROMPT=0 GIT_EDITOR=: git --no-pager <subcommand> <args>
```

- In PowerShell: `$env:GIT_TERMINAL_PROMPT=0; $env:GIT_EDITOR=':'; git --no-pager ...`
- Every proposed commit must use `git commit -S`. If signing is unavailable,
  tell the user to fix GPG/signing; do not offer an unsigned fallback.
- Never propose `--no-gpg-sign`, `git push --force`, `git add -p`, `git checkout -b`, `git rebase`, `git cherry-pick`, `GIT_PAGER=cat`, or `PAGER=cat`.
- Ask before any history rewrite; if confirmed, use `git push --force-with-lease`.
- Treat `agent/*` worktree branches as disposable; never base user work on them.

## 1. Branch

```bash
git worktree list
git branch --show-current
```

Classify the branch:

```text
A) feat/fix/chore/docs/refactor/perf/test/build/ci/style/* -> run branch -vv
B) main/master/develop/dev/staging/production/release/*     -> propose branch
C) agent/*/claude/*/codex/*/cursor/*/opencode/*             -> propose branch
```

For B or C:

```bash
git branch --list main          # verify the base exists
git diff --stat                 # peek at the changes
git status --short
```

If `main` is missing, stop: ask the user to run `git fetch origin main`. Derive
`<type>/<kebab-desc>` from the actual changes, keep it <=50 chars, and propose:

```bash
git switch -c <type>/<name> main
```

Always include `-c` and explicit `main`; agent worktree branches are not a safe
base. Include this branch command as the first command in the final copy-paste
plan, then continue with the full `git add`/`git commit`/`git push` plan.

For A:

```bash
git branch -vv
```

No upstream -> final push `git push -u origin <branch>`. Existing upstream ->
final push `git push`.

## 2. Changes

```bash
git diff --cached --stat
git diff --cached
git diff --stat
git diff
git status --short
```

All three buckets empty -> stop: `nothing to commit`.

## 3. Sanity

Before splitting, report:

- secrets or tokens: API keys, passwords, private keys
- debug leftovers: `console.log`, `dbg!`, `print!`, sensitive TODO/FIXME
- unrelated formatting churn mixed with logic

Secrets -> stop, no plan; tell the user to remove them and suggest
`git-secrets` or `trufflehog`.

For debug leftovers or formatting churn, list occurrences and exclude them
unless the user explicitly confirms inclusion.

## 4. Split

One commit equals one logical concern. Split these mixes:

- feature vs refactor
- backend vs frontend
- style-only vs logic
- tests vs production code
- dependency bump vs behavior change
- unrelated fixes, even in one file

For each group, state `what changed` and `why`. Use Conventional Commits:
valid type/scope, imperative subject <=72 chars, and `!` or `BREAKING CHANGE:`
only for real breaking changes.

## 5. Plan

Output only a copy-paste plan. Repeat per group:

```bash
git add <explicit-files-for-group>
git commit -S -m "type(scope): subject"
```

End with `git push -u origin <branch>` for first push, otherwise `git push`.
