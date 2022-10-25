import createDebug from 'debug'
import { generate } from 'dz-leetcode'
import type { ResolvedQuestion } from 'dz-leetcode'
import type { CategoryMeta, QuestionResolvedCallback, TagMap } from '../types'

export const debug = {
  cache: createDebug('dz-leetcode:cache'),
  category: createDebug('dz-leetcode:category'),
  tag: createDebug('dz-leetcode:tag'),
  question: createDebug('dz-leetcode:question'),
}

export function now() {
  return Date.now()
}

export async function resolveCategoryData(
  category: CategoryMeta,
  progress?: QuestionResolvedCallback,
): Promise<CategoryMeta> {
  debug.category(`resolving category ${category}`)

  const { questions, errors } = await resolveTagData(
    category.category, category.tagMap, progress,
  )
  category.resolved = questions
  category.errors = errors

  return category
}

export async function resolveTagData(
  category: string,
  tagMap: TagMap,
  progress?: QuestionResolvedCallback,
) {
  const errors: any[] = []
  const questions: ResolvedQuestion[] = []
  const tags = Object.keys(tagMap)

  for (const tag of tags) {
    debug.tag(`resloving tag ${tag}`)

    const data = await resolveQuestionData(
      category,
      tag,
      tagMap[tag],
      progress,
    )
    for (const { question, error } of data) {
      if (question)
        questions.push(question)
      if (error)
        errors.push(error)
    }
  }

  return {
    questions,
    errors,
  }
}

const unknownRE = /^unknown-/
export async function resolveQuestionData(
  category: string,
  tag: string,
  questions: (string | number)[],
  progressCallback: (name: string, progress: number, total: number) => void = () => { },
) {
  const total = questions.length
  let progress = 0

  return Promise.all(
    questions
      .map(async (identifier) => {
        debug.question(`resolving question ${identifier}`)

        const { question, error } = await generate({
          category: unknownRE.test(category) ? undefined : category,
          tag: unknownRE.test(tag) ? undefined : tag,
          identifier,
        })
        progress += 1
        progressCallback(question?.titleSlug || String(identifier), progress, total)
        return {
          question,
          error,
        }
      }),
  )
}
