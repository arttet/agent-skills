import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agent Skills",
  description:
    "Portable AI agent skills for Claude Code, Gemini CLI, and more.",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          gh: localIconLoader(import.meta.url, "../public/github.svg"),
        },
      }),
      llmstxt(),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: "/logo-light.svg", dark: "/logo.svg", alt: "Agent Skills" },

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Skills", link: "/skills/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          link: "/guide/getting-started",
        },
        {
          text: "Development",
          items: [
            { text: "Development Workflow", link: "/guide/development" },
            { text: "Skill Authoring", link: "/guide/skill-authoring" },
            { text: "Validation", link: "/guide/validation" },
            { text: "Contributing", link: "/guide/contributing" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Overview", link: "/guide/reference/" },
            { text: "Skill Format", link: "/guide/reference/skill-format" },
            { text: "Repository Structure", link: "/guide/reference/structure" },
            { text: "Commands", link: "/guide/reference/commands" },
            { text: "CI/CD", link: "/guide/reference/ci-cd" },
          ],
        },
      ],
      "/skills/": [
        {
          text: "Skills",
          items: [
            { text: "Overview", link: "/skills/" },
            { text: "Git Commit Planner", link: "/skills/git-commit-planner" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/arttet/agent-skills" },
    ],

    footer: {
      message: "Portable skills for AI coding agents.",
      copyright: "Copyright © 2026 Artyom Tetyukhin",
    },

    search: {
      provider: "local",
    },
  },
});
