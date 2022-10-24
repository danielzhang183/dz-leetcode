import type { ResolvedQuestion } from 'dz-leetcode'

export interface Options {
  columns: number
  pending: number
  align: string
  logLevel: string
}

export type TagMap = Record<string, (string | number)[]>

export type ResolvedTagMap = Record<string, ResolvedQuestion[]>

export interface CategoryMap {
  category: string
  tagMap: TagMap
}

export interface TagData {
  tagMap: ResolvedTagMap
  errors: any[]
}

export interface CategoryData extends TagData {
  category: string
  timestamp: number
}
