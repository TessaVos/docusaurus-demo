import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config();

const config: Config = {
  title: 'Documentation',
  tagline: 'Documentation',

  // Set the production url of your site here
  url: 'test',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/test/',

  // GitHub pages deployment config.
  organizationName: 'TessaVos',
  projectName: 'docusaurus-demo',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      'chatosaurus',
      {
        apiKey: process.env.API_KEY
      }
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://google.com',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Documentation',
      items: [
        {
          to: '/assistant',
          label: 'Assistant',
          position: 'left',
        }
      ],
      hideOnScroll: false
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'java', 'toml', 'bash', 'http', 'go', 'powershell', 'yaml', 'makefile'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
