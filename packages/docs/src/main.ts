import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  (ctx) => {
    dayjs.extend(LocalizedFormat)
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
