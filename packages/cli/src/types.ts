import type { ResolvedQuestion } from 'dz-leetcode'

export interface Options {
  columns: number
  pending: number
  align: string
  logLevel: string
}

export type rawQuestion = string | number

export type TagMap = Record<string, rawQuestion[]>

export type ResolvedTagMap = Record<string, ResolvedQuestion[]>

export interface CategoryMeta {
  category: string
  tagMap: TagMap
  questions: rawQuestion[]
  resolved: ResolvedQuestion[]
  errors: unknown[]
}

export type QuestionResolvedCallback = (name: string, counter: number, total: number) => void
