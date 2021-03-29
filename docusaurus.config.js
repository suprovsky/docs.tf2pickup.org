/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tf2pickup.pl',
  tagline: 'Team Fortress 2 pick-up games',
  url: 'https://docs.tf2pickup.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tf2pickup.pl',
  projectName: 'docs.tf2pickup.pl',
  themeConfig: {
    navbar: {
      title: 'tf2pickup.pl',
      logo: {
        alt: 'tf2pickup.pl logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tf2pickup-pl',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About tf2pickup.pl',
              to: 'docs/about',
            },
            {
              label: 'For pickup admins',
              to: 'docs/responsibilities-and-powers'
            },
            {
              label: 'For server admins',
              to: 'docs/components'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/5w6WF7xFZp',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tf2pickup-pl',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 tf2pickup.pl, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tf2pickup-pl/docs.tf2pickup.pl/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tf2pickup-pl/docs.tf2pickup.pl/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
