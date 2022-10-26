import createDebug from 'debug'
import { generate, isNumber } from 'dz-leetcode'
import type { ResolvedQuestion } from 'dz-leetcode'
import type { CategoryMeta, QuestionResolvedCallback, TagMap } from '../types'
import { isUnknown } from '../utils'

export const debug = {
  category: createDebug('dz-leetcode:category'),
  tag: createDebug('dz-leetcode:tag'),
  question: createDebug('dz-leetcode:question'),
}

export async function resolveCategory(
  category: CategoryMeta,
  progress?: QuestionResolvedCallback,
): Promise<CategoryMeta> {
  debug.category(`resolving category ${category}`)

  const { questions, errors } = await resolveTags(
    category.category, category.tagMap, progress,
  )
  category.resolved = questions
  category.errors = errors

  return category
}

export async function resolveTags(
  category: string,
  tagMap: TagMap,
  progress?: QuestionResolvedCallback,
) {
  const errors: any[] = []
  const questions: ResolvedQuestion[] = []
  const tags = Object.keys(tagMap)

  for (const tag of tags) {
    debug.tag(`resloving tag ${tag}`)

    const data = await resolveQuestions(
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

export async function resolveQuestions(
  category: string,
  tag: string,
  questions: (string | number)[],
  progressCallback?: QuestionResolvedCallback,
) {
  const total = questions.length
  let progress = 0

  return Promise.all(
    questions
      .map(async (identifier) => {
        debug.question(`resolving question ${identifier}`)

        const { question, error } = await resolveQuestion(category, tag, identifier)
        progress += 1
        progressCallback?.(question?.titleSlug || String(identifier), progress, total)
        return {
          question,
          error,
        }
      }),
  )
}

export function resolveQuestion(
  category: string,
  tag: string,
  identifier: string | number,
) {
  return generate({
    category: isUnknown(category) ? undefined : category,
    tag: isUnknown(tag) ? undefined : tag,
    identifier: isNumber(identifier)
      ? identifier
      : /^\d+$/.test(identifier)
        ? Number(identifier)
        : identifier,
  })
}
