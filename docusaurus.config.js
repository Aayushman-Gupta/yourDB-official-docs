// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- FIX IS HERE ---
  title: 'yourdb', // 1. Set your site's title
  url: 'https://Aayushman-gupta.github.io', // 2. Set your *final* deployment URL
  baseUrl: '/', // 3. Set your base URL. '/' is usually correct.
  // --- END FIX ---

  tagline: 'The Intelligent Python Database',
  favicon: 'img/yourdb.ico',

  // Set the production/development organization and project names
  organizationName: 'Aayushman-Gupta', // Your GitHub username
  projectName: 'yourdb-documentation', // Your GitHub repo name

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // Disables the blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'yourdb',
        logo: {
          alt: 'yourdb Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // You should add your GitHub repo link here:
          {
            href: 'https://github.com/Dhruv251004/yourdb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // You can add footer links here
        ],
        copyright: `Copyright © ${new Date().getFullYear()} yourdb. Built with Docusaurus.`,
      },
    }),
};

export default config;