import createDebug from 'debug'
import { singleGenerate } from 'dz-leetcode'
import type { ResolvedQuestion } from 'dz-leetcode'
import { isNumber } from './../utils'

export const debug = {
  cache: createDebug('dz-leetcode:cache'),
  category: createDebug('dz-leetcode:category'),
  tag: createDebug('dz-leetcode:tag'),
  question: createDebug('dz-leetcode:question'),
}

export type TagMap = Record<string, (string | number)[]>
export type ResolvedTagMap = Record<string, ResolvedQuestion[]>

export interface TagData {
  tagMap: ResolvedTagMap
  errors: any[]
}

export interface CategoryData extends TagData {
  category: string
  timestamp: number
}

export function now() {
  return Date.now()
}

export async function resolveCategoryData(category: string, tagMap: TagMap): Promise<CategoryData> {
  debug.category(`resolving category ${category}`)
  const data = await resolveTagData(category, tagMap)

  if (data) {
    const result = {
      category,
      tagMap: data.tagMap,
      errors: data.errors,
      timestamp: now(),
    }

    return result
  }

  return {
    category,
    tagMap: {},
    errors: [],
    timestamp: now(),
  }
}

export async function resolveTagData(category: string, tagMap: TagMap): Promise<TagData> {
  const errors: any[] = []
  const resolvedTagMap: ResolvedTagMap = {}
  const tags = Object.keys(tagMap)

  for (const tag of tags) {
    debug.tag(`resloving tag ${tag}`)
    const unresolvedQuestions = tagMap[tag]
    resolvedTagMap[tag] = []

    for (const unresolvedQuestion of unresolvedQuestions) {
      debug.question(`resolving question ${unresolvedQuestion}`)
      const { error, question } = await singleGenerate(Object.assign(
        isNumber(unresolvedQuestion)
          ? { id: Number(unresolvedQuestion) }
          : { name: unresolvedQuestion },
        {
          category,
          tag,
        },
      ))
      if (!error)
        errors.push(error)
      if (question != null)
        resolvedTagMap[tag].push(question)
    }
  }

  return {
    tagMap: resolvedTagMap,
    errors,
  }
}
