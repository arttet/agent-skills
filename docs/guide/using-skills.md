# Using Skills

Each supported agent has its own way of discovering and loading skills. Once you install Agent Skills in your project, activate the skill in your agent environment. The agent handles the rest.

## Supported Agents

| Agent       | How to activate skills                 | Documentation                                                                                |
| ----------- | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| Claude Code | Use the built-in skill system          | [Claude Code Skills](https://code.claude.com/docs/en/skills)                                 |
| Codex       | Configure skills in Codex settings     | [Codex Skills](https://developers.openai.com/codex/skills)                                   |
| Gemini CLI  | Enable skills via Gemini CLI config    | [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/)                                  |
| OpenCode    | Add skills through OpenCode workspace  | [OpenCode Skills](https://opencode.ai/docs/skills/)                                          |
| Kimi CLI    | Load skills via Kimi CLI customization | [Kimi CLI Skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html) |

## What Happens Next

After you point your agent at the skill directory:

1. The agent reads `SKILL.md` and understands when to apply the skill.
2. It follows the rules and workflow described in the file.
3. It loads optional `references/` only when a specific task needs them.

You do not need to manually invoke the skill. The agent decides relevance based on the `description` field in `SKILL.md`.
