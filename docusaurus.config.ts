import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Supports de Cours/TD/TP',
    tagline: 'Plateforme contenant les cours/TDs/TPs de Pr Ait Said Mehdi.',
    favicon: 'img/favicon.ico',


    customFields: {
        contact: {
            name: 'Pr. AIT SAID Mehdi',
            email: 'm.aitsaid@ump.ac.ma',
            phone: '06 66 85 41 85',
            linkedin: 'https://www.linkedin.com/in/mehdi-aitsaid',
            github: 'https://github.com/mehdiaitsaid',
            instagram: 'https://www.instagram.com/mehdi.aitsaid/',
        },
    },

    future: {
        v4: true,
    },

    url: 'https://mehdiaitsaid.github.io',
    baseUrl: '/Supports-de-Cours-TD-TP',

    organizationName: 'mehdiaitsaid',
    projectName: 'Supports de Cours/TD/TP',

    trailingSlash: false,
    deploymentBranch: "gh-pages",
    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    path: 'db',
                    routeBasePath: 'db',
                    editUrl:
                        'https://github.com/mehdiaitsaid/Supports-de-Cours-TD-TP/blob/master/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'noaccess',
                path: 'noaccess',
                routeBasePath: 'noaccess',
                sidebarPath: './sidebars.ts',
                // copy editUrl here if needed
            },
        ]
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Supports de Cours/TD/TP',
            logo: {
                alt: 'Supports de Cours/TD/TP',
                src: 'img/logo.png',
            },
            items: [
                {
                    href: 'https://github.com/mehdiaitsaid/Supports-de-Cours-TD-TP',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',

            copyright: `Copyright © ${new Date().getFullYear()} Pr. AIT SAID Mehdi.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
