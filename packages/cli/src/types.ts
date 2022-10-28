import type { ResolvedQuestion } from 'dz-leetcode'

export interface Options {
  columns: number
  pending: number
  align: string
  logLevel: string
}

export interface CliOptionBase {
  root?: string
  lang?: 'zh' | 'zh-CN' | 'en' | 'en-US'
}

export interface FileCliOptions extends CliOptionBase {
}

export interface PickCliOptions extends CliOptionBase {
  category?: string
  tag?: string
}

export interface RandomCliOptions extends CliOptionBase {
  category?: string
  tag?: string
  difficulty?: string
  interactive?: boolean
}

export interface FileOptions extends FileCliOptions {
  file: string
  logLevel: string
}

export interface CommandOptions extends PickCliOptions {
  identifier: string
  logLevel: string
}

export interface RandomOptions extends RandomCliOptions {
  logLevel: string
  skip?: number
}

export interface GenerateEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMeta[]) => void
  beforeCategoryStart?: (category: CategoryMeta) => void
  afterCategoryEnd?: (category: CategoryMeta) => void
  afterCategoriesEnd?: (categories: CategoryMeta[]) => void
  onQuestionResolved?: QuestionResolvedCallback
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
