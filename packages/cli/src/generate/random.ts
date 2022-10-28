import type { CategoryMap, RandomQuestion, TagMeta } from 'dz-leetcode'
import { getCategoryMaps, getQuestionsByFilter } from 'dz-leetcode'
import type { RandomOptions } from '../types'
import { randDistanceRange, randRange } from '../utils'
import { generateSingle } from './command'

const distance = 100

// TODO: refine this type
interface InternalTag {
  questionNum: number
  tag: TagMeta
}

/**
 * Opined Random
 */
export async function generateFromRandom(options: RandomOptions) {
  const {
    category,
    tag,
    difficulty,
    logLevel,
  } = options

  const categories = await getCategoryMaps()
  const tags: InternalTag[] = categories.map(i => i.tagMap.map(t => t)).flat(1)

  async function regenerate() {
    let randTag: InternalTag | undefined
    if (tag)
      randTag = (tag && findTag(tag)) || undefined
    if (!randTag) {
      const randTags = (category && findCategory(category)?.tagMap) || tags
      randTag = randTags[randRange(0, randTags.length)]
    }

    const range = randTag.questionNum
    const skip = range > distance
      ? randDistanceRange(0, range, distance)
      : 0
    const randQuestions = await getQuestionsByFilter({
      tag: randTag.tag.slug,
      difficulty,
      skip,
    })

    return randQuestions
  }

  function findCategory(category: string) {
    return categories.find(i => i.name === category)
  }

  function findTag(tag: string) {
    return tags.find(i => i.tag.slug === tag)
  }

  let randQuestions: RandomQuestion[] = await regenerate()
  while (!randQuestions.length)
    randQuestions = await regenerate()

  let randQuestion: RandomQuestion | undefined
  while (!randQuestion) {
    // TODO: remove done question
    randQuestion = randQuestions[randRange(0, randQuestions.length)]
  }

  await generateSingle({
    category,
    tag,
    identifier: randQuestion.titleSlug,
    logLevel,
  })
}
