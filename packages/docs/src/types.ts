import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Post {
  path: string
  title: string
  date: string
  type?: string
  lang?: string
  desc?: string
  duration?: string
}

export type Module =
  | 'algorithms'
  | 'structures'
  | 'interview'
  | 'design'

export type AlgorithmTag =
  | 'back-tracking'
  | 'binary-search'
  | 'dynamic-programming'
  | 'greedy'
  | 'math'
  | 'sort'

export type StructureTag =
  | 'hash-table'
  | 'linked-list'
  | 'array'
  | 'heap'
  | 'queue'
  | 'stack'
  | 'tree'

export type Tag = AlgorithmTag | StructureTag

export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Question {
  name: string
  title: string
  id: number | string
  difficulty: Difficulty
  category: Module | string
  tag: Tag
  tags?: string[]
  link: string
  origin: string
  series?: string
  seriesIndex?: number
  done?: boolean
}

export interface SubNav {
  name: string
  link: string
}
