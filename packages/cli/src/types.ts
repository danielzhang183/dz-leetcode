import type { ResolvedQuestion } from 'dz-leetcode'

export interface Options {
  columns: number
  pending: number
  align: string
  logLevel: string
}

export interface CommonOptions {
  root?: string
  file?: string
  lang?: string | string[]
  category?: string
  tag?: string
  identifier?: string | string[] // single or multiple questions identifier<title or id>
  interactive?: boolean
  cwd?: string
  logLevel?: string
}

export interface FileOptions extends CommonOptions {
  file: string
}

export interface CommandOptions extends CommonOptions {
  identifier: string | string[]
}

export interface RandomOptions extends CommonOptions {
  skip?: number
  difficulty?: string
}

export interface GenerateEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMeta[]) => void
  beforeCategoryStart?: (category: CategoryMeta) => void
  afterCategoryEnd?: (category: CategoryMeta) => void
  afterCategoriesEnd?: (categories: CategoryMeta[]) => void
  onQuestionResolved?: QuestionResolvedCallback
}

export type QuestionIdentifier = string | number

export type TagMap = Record<string, QuestionIdentifier[]>

export interface CategoryMeta {
  category: string
  tagMap: TagMap
  questions: QuestionIdentifier[]
  resolved: ResolvedQuestion[]
  errors: unknown[]
}

export type QuestionResolvedCallback = (name: string, counter: number, total: number) => void
