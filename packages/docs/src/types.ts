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

export type Module =
  | 'algorithm'
  | 'structure'
  | 'interview'
  | 'design'

export type AlgorithmTag =
  | 'back-tracking' | 'bt'
  | 'binary-search' | 'bs'
  | 'dynamic-programming' | 'dp'
  | 'greedy'
  | 'math'
  | 'sort'

export type StructureTag =
  | 'hash-table' | 'ht'
  | 'linked-list' | 'll'
  | 'array'
  | 'heap'
  | 'queue'
  | 'stack'
  | 'tree'

export type Tag = AlgorithmTag | StructureTag

export interface Question {
  name: string
  id?: number
  link: string
  rank: 'easy' | 'medium' | 'hard'
}
