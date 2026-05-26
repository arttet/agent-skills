# Getting Started

[Agent Skills](https://agentskills.io/home) is a collection of portable, reusable skills for AI agents. These
skills are designed to work across multiple agent environments, including Claude Code, Gemini CLI, OpenCode, Kimi CLI, and Codex.

Follow these steps to install and start using [Agent Skills](https://agentskills.io/home) in your local environment.

## Installation

Install Agent Skills with the GitHub CLI command [`gh skill`](https://cli.github.com/manual/gh_skill_install#gh-skill-install), or with the [`skills`](https://www.skills.sh/) CLI through npm or Bun.

::: code-group

```sh [gh]
gh skill install arttet/agent-skills
```

```sh [npm]
npx skills add arttet/agent-skills
```

```sh [bun]
bunx skills add arttet/agent-skills
```

:::

## Prerequisites

Install or choose at least one AI agent environment:

| Agent environment | Documentation                                             |
| ----------------- | --------------------------------------------------------- |
| Claude Code       | <https://docs.anthropic.com/en/docs/claude-code/overview> |
| Codex             | <https://developers.openai.com/codex>                     |
| Gemini CLI        | <https://geminicli.com/docs/>                             |
| OpenCode          | <https://opencode.ai/docs>                                |
| Kimi CLI          | <https://www.kimi.com/code/docs/en/>                      |

For local contribution and validation tooling, see the
[development workflow](./development).
