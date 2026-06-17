# Git Commit Planner

Git Commit Planner reads your working tree and turns it into a tidy, reviewable
commit plan. It looks at your staged, unstaged, and untracked changes, works out
a sensible branch and commit split, and hands you the exact `git` commands to
run. It never commits or pushes on its own — you stay in control and run the
plan when you are ready.

## Invoking the Skill

Ask for it in plain language. The agent loads the skill whenever your request
matches its description, so any of these will start the planner:

- "What should I commit?"
- "Plan my commits"
- "Stage and commit my changes"
- "Split this work into separate commits"
- "Write a commit message for the staged diff"

## How It Works

When you invoke the skill, the agent reads its `SKILL.md` to load the commit
policy, then walks your changes the same way every time:

1. It inspects the diff across staged, unstaged, and untracked files.
2. It checks branch context — including agent worktrees — so new work lands on a
   sensible branch.
3. It groups the changes into atomic
   [Conventional Commits](https://www.conventionalcommits.org), one logical
   concern per commit.
4. It returns a copy-paste plan of `git add`, `git commit -S`, and `git push`
   commands for you to review and run.

When a step needs more detail, the agent pulls in the optional `references/` and
`assets/` that ship alongside `SKILL.md`.

## Why Use It

The planner keeps history clean without taking the wheel. Every commit it
proposes is signed (`git commit -S`) and follows a consistent message style, and
because it only ever prints commands, nothing touches your repository until you
say so. That makes it safe to run on any branch and quick to redo if you want a
different split.

## Resources

- Skill entry: [`skills/git-commit-planner/SKILL.md`](https://github.com/arttet/agent-skills/tree/main/skills/git-commit-planner/SKILL.md)

## Evaluation

Latest evaluation (`just evaluate`):

| Metric              | Score  |
| ------------------- | ------ |
| Clarity             | 4/5    |
| Actionability       | 5/5    |
| Token Efficiency    | 4/5    |
| Scope Discipline    | 5/5    |
| Directive Precision | 5/5    |
| Novelty             | 3/5    |
| Overall             | 4.33/5 |

## Validation

Latest validation (`just validate`):

| Check           | Result                                                               |
| --------------- | -------------------------------------------------------------------- |
| `Structure`     | Passed: `SKILL.md` found                                             |
| `Frontmatter`   | Passed: `git-commit-planner` name is valid; description is 271 chars |
| `Markdown`      | Passed: no unclosed code fences                                      |
| `Links`         | Passed: all link checks passed                                       |
| `Content`       | Passed: content analysis complete                                    |
| `Contamination` | Passed: contamination analysis complete                              |

| Metric                    | Value             |
| ------------------------- | ----------------- |
| SKILL.md body             | 944 tokens        |
| Total tokens              | 944 tokens        |
| Word count                | 586               |
| Code block ratio          | 0.17              |
| Imperative ratio          | 0.17              |
| Information density       | 0.17              |
| Instruction specificity   | 1.00              |
| Sections                  | 7                 |
| List items                | 16                |
| Code blocks               | 8                 |
| Contamination level       | Low (score: 0.00) |
| Primary language category | shell             |
| Scope breadth             | 1                 |
