import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Humanoid Robots',
  tagline: 'Advanced Robotics and AI Integration',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-ai-humanoid-robotics-site.example.com',
  baseUrl: '/',

  organizationName: 'my-org',
  projectName: 'ai-humanoid-robots-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/your-username/your-repo/tree/main/',
        },

        // ❌ DISABLE BLOG COMPLETELY
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ai-humanoid-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Humanoid Robots',
      logo: {
        alt: 'AI Humanoid Robot Logo',
        src: 'img/robot-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        // ❌ REMOVED BLOG LINK FROM NAVBAR
        {
          href: 'https://github.com/MuneebMalik244535/AI-Humanoid-Robotics-Books',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chapters',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Robotics Stack Exchange',
              href: 'https://robotics.stackexchange.com/',
            },
            {
              label: 'AI Discord',
              href: 'https://discord.gg/ai-research',
            },
            {
              label: 'X',
              href: 'https://x.com/ai_research',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // ❌ REMOVED BLOG LINK FROM FOOTER
            {
              label: 'GitHub',
              href: 'https://github.com/MuneebMalik244535/AI-Humanoid-Robotics-Books',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Humanoid Robots Book. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
