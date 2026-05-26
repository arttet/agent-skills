# Contributing

We welcome contributions to Agent Skills! Whether you're adding a new skill, improving documentation, or fixing a bug, your help is appreciated.

## How to Contribute

1. **Fork the Repository:** Create a fork of the `arttet/agent-skills` repository.
2. **Create a Branch:** Create a feature branch for your changes.
3. **Follow Conventions:** Adhere to the [Skill Format](../reference/skill-format) and [Repo Conventions](./introduction).
4. **Test Your Changes:** Use your skill in an agent environment to verify it works as expected.
5. **Submit a Pull Request:** Open a PR with a clear description of your changes.

## Repo Conventions

- Repo-wide agent rules live in `AGENTS.md`.
- `CLAUDE.md` and `GEMINI.md` are compatibility shims that link to `AGENTS.md`.
- Pull requests are automatically validated by [CI](../reference/ci-cd) for structure, forbidden patterns, and linting.
