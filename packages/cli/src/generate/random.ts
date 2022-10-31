import type { RandomQuestion, TagMeta } from 'dz-leetcode'
import { getCategoryMaps, getQuestionsByFilter, writeQuestion } from 'dz-leetcode'
import prompts from 'prompts'
import c from 'picocolors'
import type { RandomOptions } from '../types'
import { isUnknown, randDistanceRange, randRange } from '../utils'
import { TableLogger } from '../log'
import { resolveQuestion } from '../io/resolves'
import { renderOutcomes, renderSingleQuestion } from './render'

const distance = 100

// TODO: refine this type
interface InternalTag {
  questionNum: number
  tag: TagMeta
}

interface DumpChoice {
  title: string
  value: string
}

export async function generateFromRandom(options: RandomOptions) {
  let { category, tag } = options

  const categories = await getCategoryMaps()
  const tags: InternalTag[] = categories.map(i => i.tagMap.map(t => t)).flat(1)

  if (options.interactive) {
    category = await prompts({
      type: 'select',
      name: 'category',
      message: 'Pick a category',
      choices: dumpCategories() as any as prompts.Choice[],
      initial: 1,
    }).then(r => r.category)
    tag = await prompts({
      type: 'select',
      name: 'tag',
      message: 'Pick a tag',
      choices: dumpTags(category!) as any as prompts.Choice[],
      initial: 1,
    }).then(r => r.tag)
  }

  async function generate() {
    let randQuestions: RandomQuestion[] = await generateRandQuestions()
    while (!randQuestions.length)
      randQuestions = await generateRandQuestions()

    let randQuestion: RandomQuestion | undefined
    while (!randQuestion) {
    // TODO: remove done question
      randQuestion = randQuestions[randRange(0, randQuestions.length)]
    }

    const { error, question } = await resolveQuestion({
      ...options,
      identifier: randQuestion.titleSlug,
      write: false,
    })
    if (error) {
      const { lines, errLines } = renderSingleQuestion({ error })
      renderOutcomes(lines, errLines)
      return
    }

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
        message: c.green('regenerate an random question?'),
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
      const { question: writableQuestion, error: writableError } = await writeQuestion(question!, options)
      const { lines, errLines } = renderSingleQuestion({ question: writableQuestion, error: writableError })
      renderOutcomes(lines, errLines)
    }
  }

  // ==== functions ====
  async function generateRandQuestions() {
    let randTag: InternalTag | undefined

    if (tag && !isUnknown(tag))
      randTag = (tag && findTag(tag)) || undefined

    if (!randTag) {
      const randTags = (category && !isUnknown(category) && findCategory(category)?.tagMap) || tags
      randTag = randTags[randRange(0, randTags.length)]
    }

    const range = randTag.questionNum
    const skip = range > distance
      ? randDistanceRange(0, range, distance)
      : 0

    return await getQuestionsByFilter({
      tag: randTag.tag.slug,
      difficulty: options.difficulty,
      skip,
    })
  }

  function findCategory(category: string) {
    return categories.find(i => i.name === category)
  }

  function findTag(tag: string) {
    return tags.find(i => i.tag.slug === tag)
  }

  function dumpCategories(): DumpChoice[] {
    return [
      { title: 'auto', value: 'unknown-category' },
      ...categories.map(i => ({ title: i.name, value: i.name })),
    ]
  }

  function dumpTags(category: string): DumpChoice[] {
    const dumpTags = category === 'unknown-category' ? tags : findCategory(category)!.tagMap
    return [
      { title: 'auto', value: 'unknown-tag' },
      ...dumpTags.map(i => ({ title: i.tag.name, value: i.tag.slug })),
    ]
  }

  generate()
}
