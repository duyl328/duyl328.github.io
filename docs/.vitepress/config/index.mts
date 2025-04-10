import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote';

import shared from './shared'
import zh from './zh'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
  },
  markdown: {
    config: (md) => {
      // 添加脚注
      md.use(markdownItFootnote);
    }
  }
})
