import type { CommonOptions, ResolvedQuestion } from 'dz-leetcode'

export interface TableOptions {
  columns: number
  pending: number
  align: string
  logLevel: string
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

export interface GenerateEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMeta[]) => void
  beforeCategoryStart?: (category: CategoryMeta) => void
  afterCategoryEnd?: (category: CategoryMeta) => void
  afterCategoriesEnd?: (categories: CategoryMeta[]) => void
  onQuestionResolved?: QuestionResolvedCallback
}
