import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import autoRoutes from 'virtual:generated-pages'
import App from './App.vue'
import type { UserModule } from './types'
import { useCodeGroups, useCopyCode } from './modules/markdown'

import '@unocss/reset/tailwind.css'
import './styles/custom.css'
import 'uno.css'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    dayjs.extend(LocalizedFormat)
    // setup global copy code handler
    useCopyCode()
    // setup global code groups handler
    useCodeGroups()
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
