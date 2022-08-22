// import { resolve } from 'path'
import { defineConfig } from 'vitepress'
// import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  lang: 'en-US',
  title: 'Leetcode CN',
  lastUpdated: true,
  vite: {
    // resolve: {
    //   alias: [
    //     { find: '/~theme', replacement: `${resolve(__dirname, '/docs/.vitepress/theme')}/` },
    //   ],
    // },
    plugins: [
      Unocss({
        presets: [
          presetAttributify(),
          presetUno(),
        ],
      }),

      // Vue({
      //   include: [/\.vue$/, /\.md$/],
      // }),
    ],
  },
  themeConfig: {
    nav: nav(),
    // sidebar: {
    //   '/typescript/': sidebarTypescript(),
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/danielzhang183' },
    ],
    editLink: {
      pattern: 'git+https://github.com/danielzhang183/dz-leetcode/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Dylan Zhang',
    },
  },
})

function nav() {
  return [
    { text: 'Data Structure', link: '/structure/index', activeMatch: '/structure/' },
    { text: 'Common Algorithm', link: '/common/index', activeMatch: '/common/' },
    { text: 'Used In Frameworks', link: '/framework/index', activeMatch: '/framework/' },
    { text: 'Interview', link: '/interview/index', activeMatch: '/interview/' },
  ]
}

// function sidebarTypescript() {
//   return [
//     {
//       text: 'Typscript',
//       collapsible: true,
//       items: [
//         { text: 'Challenges', link: '/typescript/challenges' },
//         { text: 'Tricks', link: '/typescript/tricks' },
//       ],
//     },
//   ]
// }
