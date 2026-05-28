---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Agent Skills"
  text: "Portable skills for AI coding agents"
  tagline: Write once, run in every coding agent.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Browse Skills
      link: /skills/

features:
  - title: 🌐 Cross-Agent by Default
    details: One install puts the same skills in Claude Code, Gemini CLI, OpenCode, Kimi CLI, and Codex.
  - title: 📊 Every Skill Is Scored
    details: skill-validator grades clarity, actionability, and token efficiency before a skill merges.
  - title: 📦 Context-Frugal
    details: A lean SKILL.md loads upfront. Detailed references load only when a task needs them, saving tokens on docs the agent isn't using.
  - title: ✅ Gated Before Merge
    details: Format, lint, security scans, and skill scoring run on every PR. Nothing lands without passing all of them.
---
