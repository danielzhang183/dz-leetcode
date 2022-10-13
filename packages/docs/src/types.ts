import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
}
