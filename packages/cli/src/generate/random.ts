import type { RandomQuestion, TagMeta } from 'dz-leetcode'
import { getCategoryMaps, getQuestionsByFilter } from 'dz-leetcode'
import prompts from 'prompts'
import c from 'picocolors'
import type { RandomOptions } from '../types'
import { randDistanceRange, randRange } from '../utils'
import { TableLogger } from '../log'
import { resolveQuestion } from '../io/resolves'
import { renderOutcomes, renderSingleQuestion } from './render'

const distance = 100

// TODO: refine this type
interface InternalTag {
  questionNum: number
  tag: TagMeta
}

export async function generateFromRandom(options: RandomOptions) {
  const {
    category,
    tag,
    difficulty,
  } = options

  const categories = await getCategoryMaps()
  const tags: InternalTag[] = categories.map(i => i.tagMap.map(t => t)).flat(1)

  async function generate() {
    let randQuestions: RandomQuestion[] = await generateRandQuestions()
    while (!randQuestions.length)
      randQuestions = await generateRandQuestions()

    let randQuestion: RandomQuestion | undefined
    while (!randQuestion) {
    // TODO: remove done question
      randQuestion = randQuestions[randRange(0, randQuestions.length)]
    }

    const { error, question } = await resolveQuestion(
      category || 'unknown-category',
      tag || 'unknown-tag',
      randQuestion.titleSlug,
    )
    if (question) {
      const logger = new TableLogger({
        columns: 2,
        align: 'LL',
      })
      logger.row()
      logger.row('Title:', c.blue(question.title))
      logger.row('Difficulty:', question.difficulty)
      logger.row('Category:', question.category)
      logger.row('Tag:', question.tag)
      logger.row('Origin:', c.dim(c.underline(question.origin)))
      logger.row()
      logger.output()
    }

    const regenerate = await prompts([
      {
        name: 'regenerate',
        type: 'confirm',
        initial: false,
        message: c.green('regenerate a random question?'),
      },
    ]).then(r => r.regenerate)

    if (regenerate) {
      console.clear()
      console.log()
      console.log(c.magenta('regenerating an random question...'))
      await generate()
    }
    else {
      console.log()
      console.log(c.magenta('generating files...'))
      const { lines, errLines } = renderSingleQuestion({ question, error })
      renderOutcomes(lines, errLines)
    }
  }

  // ==== functions ====
  async function generateRandQuestions() {
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

    return await getQuestionsByFilter({
      tag: randTag.tag.slug,
      difficulty,
      skip,
    })
  }

  function findCategory(category: string) {
    return categories.find(i => i.name === category)
  }

  function findTag(tag: string) {
    return tags.find(i => i.tag.slug === tag)
  }

  generate()
}
