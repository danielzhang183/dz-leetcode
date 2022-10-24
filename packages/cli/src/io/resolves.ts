import createDebug from 'debug'
import { generate } from 'dz-leetcode'
import type { CategoryData, ResolvedTagMap, TagData, TagMap } from '../types'

export const debug = {
  cache: createDebug('dz-leetcode:cache'),
  category: createDebug('dz-leetcode:category'),
  tag: createDebug('dz-leetcode:tag'),
  question: createDebug('dz-leetcode:question'),
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

const unknownRE = /^unknow-/
export async function resolveTagData(category: string, tagMap: TagMap): Promise<TagData> {
  const errors: any[] = []
  const resolvedTagMap: ResolvedTagMap = {}
  const tags = Object.keys(tagMap)

  for (const tag of tags) {
    debug.tag(`resloving tag ${tag}`)
    const identifiers = tagMap[tag]
    resolvedTagMap[tag] = []

    for (const identifier of identifiers) {
      debug.question(`resolving question ${identifier}`)
      const { error, question } = await generate({
        category: unknownRE.test(category) ? undefined : category,
        tag: unknownRE.test(tag) ? undefined : tag,
        identifier,
      })
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
