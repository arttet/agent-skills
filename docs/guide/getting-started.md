# Getting Started

[Agent Skills](https://agentskills.io/home) is a collection of portable, reusable skills for AI agents. Once installed, your agent gains new capabilities, from planning git commits to validating code, without you having to write prompts from scratch.

This guide shows how to install the skill collection and activate it in your agent environment.

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
[contributor workflow](./contributors/workflow).
