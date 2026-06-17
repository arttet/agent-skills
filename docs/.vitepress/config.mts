import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";

// Single source of truth for site identity. Reused in <meta description>, the
// Open Graph / Twitter card tags, and the llms.txt domain below — change here
// and the social preview, search snippet, and llms summary stay in sync.
const SITE_TITLE = "Agent Skills";
const SITE_DESCRIPTION =
  "Portable AI agent skills for Claude Code, Gemini CLI, and more.";
const SITE_URL = "https://skills.arttet.dev";
// TODO: swap to a dedicated 1200x630 PNG once one exists — Telegram and the
// X (Twitter) card validator render PNG / JPG more reliably than SVG.
const OG_IMAGE_URL = `${SITE_URL}/logo.svg`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",

  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  head: [
    // llms.txt discovery — `<link rel>` value is not yet a ratified standard;
    // the canonical mechanism remains the well-known `/llms.txt` path. Safe
    // to revise once one is adopted.
    ["link", { rel: "llms-project", href: "/llms.txt" }],

    // Browser tab icon. Single SVG, points at docs/src/public/logo.svg.
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],

    // Open Graph (Telegram / Discord / Slack / LinkedIn share cards).
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: SITE_TITLE }],
    ["meta", { property: "og:title", content: SITE_TITLE }],
    ["meta", { property: "og:description", content: SITE_DESCRIPTION }],
    ["meta", { property: "og:url", content: `${SITE_URL}/` }],
    ["meta", { property: "og:image", content: OG_IMAGE_URL }],

    // X / Twitter card — using `summary` (small thumbnail) until a 1200x630
    // PNG exists; then flip to `summary_large_image` for the wide card.
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: SITE_TITLE }],
    ["meta", { name: "twitter:description", content: SITE_DESCRIPTION }],
    ["meta", { name: "twitter:image", content: OG_IMAGE_URL }],
  ],

  // Renders a per-page "Last updated" timestamp pulled from Git history.
  // Requires a non-shallow checkout in CI (`fetch-depth: 0`).
  lastUpdated: true,

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          // The `gh` code-group tab (GitHub CLI) is not in the plugin's
          // built-in set — map it to an Iconify name so no local SVG is
          // shipped. `npm` / `bun` / etc. resolve automatically.
          gh: "simple-icons:github",
        },
      }),
      llmstxt({
        domain: SITE_URL,
        description:
          "Portable AI agent skills for Claude Code, Gemini CLI, Codex, and other coding agents.",
        details: [
          "Each skill is a self-contained Markdown file at `skills/<name>/SKILL.md`.",
          "Using skills with your agent: /guide/using-skills.",
          "Skill format spec: /guide/skill-format.",
          "Manual authoring workflow: /guide/create-a-skill.",
          "Validation tooling: /guide/validate-and-test.",
          "Project structure: /guide/contributors/structure.",
        ].join("\n"),
      }),
    ],
    build: {
      // VitePress + group-icons + mermaid + local search push the largest
      // chunk above the default 500 kB.
      chunkSizeWarningLimit: 2000,
      rolldownOptions: {
        onLog(level, log, defaultHandler) {
          // Upstream noise from `@vueuse/core`: Rolldown can't position-match
          // its `/* #__PURE__ */` annotations. Harmless — drop it. Anything
          // else still routes through the default handler.
          if (
            log.code === "INVALID_ANNOTATION" &&
            typeof log.message === "string" &&
            log.message.includes("@vueuse/core")
          ) {
            return;
          }
          defaultHandler(level, log);
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // Single white-on-transparent SVG; light-mode inversion lives in
    // theme/style.css (.VPImage.logo filter rule).
    logo: { src: "/logo.svg", alt: "Agent Skills" },

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
          text: "Using Skills",
          link: "/guide/using-skills",
        },
        {
          text: "Skill Format",
          link: "/guide/skill-format",
        },
        {
          text: "Create a Skill",
          link: "/guide/create-a-skill",
        },
        {
          text: "Validate and Test",
          link: "/guide/validate-and-test",
        },
        {
          text: "Contributors",
          items: [
            { text: "Workflow", link: "/guide/contributors/workflow" },
            { text: "Commands", link: "/guide/contributors/commands" },
            { text: "CI/CD", link: "/guide/contributors/ci-cd" },
            {
              text: "Repository Structure",
              link: "/guide/contributors/structure",
            },
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

    editLink: {
      pattern: "https://github.com/arttet/agent-skills/edit/main/docs/src/:path",
      text: "Edit this page on GitHub",
    },

    outline: [2, 3],

    footer: {
      message: "Portable skills for AI coding agents.",
      copyright: "Copyright © 2026 Artyom Tetyukhin",
    },

    search: {
      provider: "local",
    },
  },
});
