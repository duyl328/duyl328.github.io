import {defineConfig, type SiteConfig} from 'vitepress'
// 自动导入 TDesign
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {TDesignResolver} from 'unplugin-vue-components/resolvers'

import {handleHeadMeta} from '../theme/utils/handleHeadMeta'
import {search as zhSearch} from './zh'
import sidebar from '../../../autoSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,
    sitemap: {
        hostname: 'https://duyl328.github.io',
    },
    // base: 'https://duyl328.github.io',
    base: process.env.BASE || '/',
    head: [
        // 谷歌分析，暂不使用
        ['script',
            {
                async: 'async',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-E6X527581S',
            }],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E6X527581S');`,
        ],

        [
            'link',
            {
                rel: 'icon',
                // href: '',
            },
        ],
    ],
    // https://vitepress.dev/reference/site-config#transformhead
    async transformHead(context) {
        return handleHeadMeta(context)
    },
    buildEnd: (config: SiteConfig) => {
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: [2, 4],

        search: {
            provider: 'local',
            options: {
                locales: {...zhSearch},
            },
        },

        externalLinkIcon: true,
    },

    markdown: {
        math: true,
    },

    vite: {
        plugins: [
            // 自动更新列表
            sidebar('docs/.vitepress', '/docs/notes'),
            AutoImport({
                resolvers: [
                    TDesignResolver({
                        library: 'vue-next',
                    })],
            }),
            Components({
                resolvers: [
                    TDesignResolver({
                        library: 'vue-next',
                    })],
            }),
        ],
    },
})
