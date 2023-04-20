import type { CommonOptions, ResolvedQuestion } from 'dz-leetcode'

export interface TableOptions {
  columns: number
  pending: number
  align: string
  logLevel: string
}

export interface FileOptions extends CommonOptions {
  file: string
  isReset?: boolean
}

export interface CommandOptions extends CommonOptions {
  identifier: QuestionIdentifier | QuestionIdentifier[]
}

export interface RandomOptions extends CommonOptions {
  skip?: number
  difficulty?: string
}

export interface CleanupOptions extends CommandOptions {
  root: string
}

export type QuestionIdentifier = string | number

export type TagMap = Record<string, QuestionIdentifier[]>

export interface CategoryMeta {
  name: string
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
