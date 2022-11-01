import createDebug from 'debug'
import { generate, isNumber } from 'dz-leetcode'
import type { CommonOptions, GenerateOptions, ResolvedQuestion } from 'dz-leetcode'
import pLimit from 'p-limit'
import type { CategoryMeta, QuestionIdentifier, QuestionResolvedCallback, TagMap } from '../types'
import { isUnknown } from '../utils'

export const debug = {
  category: createDebug('dz-leetcode:category'),
  tag: createDebug('dz-leetcode:tag'),
  question: createDebug('dz-leetcode:question'),
}

export async function resolveCategory(
  category: CategoryMeta,
  options: CommonOptions,
  progress?: QuestionResolvedCallback,
): Promise<CategoryMeta> {
  debug.category(`resolving category ${category}`)

  const { questions, errors } = await resolveTags(
    category.name,
    category.tagMap,
    options,
    progress,
  )
  category.resolved = questions
  category.errors = errors

  return category
}

export async function resolveTags(
  category: string,
  tagMap: TagMap,
  options: CommonOptions,
  progressCallback?: QuestionResolvedCallback,
) {
  const errors: any[] = []
  const questions: ResolvedQuestion[] = []
  const tags = Object.keys(tagMap)
  let counter = 0

  for (const tag of tags) {
    debug.tag(`resloving tag ${tag}`)

    options.category = category
    options.tag = tag
    const { data, progress } = await resolveQuestions(
      tagMap[tag],
      options,
      progressCallback,
      counter,
    )
    counter = progress
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
  questions: QuestionIdentifier[],
  options: CommonOptions,
  progressCallback?: QuestionResolvedCallback,
  counter = 0,
) {
  const total = questions.length
  const limit = pLimit(1)

  const data = await Promise.all(
    questions.map(identifier => limit(async (identifier) => {
      debug.question(`resolving question ${identifier}`)

      const { question, error } = await resolveQuestion({ ...options, identifier })
      counter += 1
      progressCallback?.(question?.titleSlug || String(identifier), counter, total)
      return {
        question,
        error,
      }
    }, identifier)),
  )

  return { data, progress: counter }
}

export function resolveQuestion<T extends CommonOptions & { write?: boolean }>(options: T) {
  const {
    category,
    tag,
    identifier,
    write = true,
  } = options

  const normalizedOptions: GenerateOptions = Object.assign(
    options,
    {
      category: category && isUnknown(category) ? undefined : category,
      tag: tag && isUnknown(tag) ? undefined : tag,
      identifier: (isNumber(identifier)
        ? identifier
        : /^\d+$/.test((identifier as string)!)
          ? Number(identifier)
          : identifier) as QuestionIdentifier,
      write,
    },
  )

  return generate(normalizedOptions)
}
