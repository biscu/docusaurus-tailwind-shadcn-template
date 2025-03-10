// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Postnord App",
  staticDirectories: ["static"],
  tagline: "Template",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://docusaurus-template-dusky.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Company", // Usually your GitHub org/user name.
  projectName: "Template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexPages: true,
        //searchContextByPaths: ["/"],
        docsRouteBasePath: ["/app"],
        docsDir: ["app"],
        language: ["en"],
        //explicitSearchResultPath: true,
        searchBarShortcut: false,
        searchBarShortcutHint: false,
        searchContextByPaths: ["/app"],
        searchBarPosition: "right",
        highlightSearchTermsOnTargetPage: true,
        //hideSearchBarWithNoSearchContext: true,
        // ... other options
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "app", // Change this to 'app'
          routeBasePath: "app", // Optional: change the base URL path from /docs to /app
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Blog title",
          blogDescription: "Blog",
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/global.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // announcementBar: {
      //   id: "support_us",
      //   content:
      //     'This is a banner example to prompt for specific occasions <a target="_blank" rel="noopener noreferrer" href="#">Can also support links</a>',
      //   backgroundColor: "var(--ifm-background-color-inverted)",
      //   textColor: "var(--ifm-heading-color-inverted)",
      //   isCloseable: false,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/og_image.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "Postnord Logo",
          src: "img/postnord_logo_light.svg",
          srcDark: "img/postnord_logo_dark.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "intro",
            label: "App",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/birdview", label: "Birdview", position: "left" },
          {
            type: "search",
            position: "right",
          },
        ],
      },
    }),
};

export default config;
