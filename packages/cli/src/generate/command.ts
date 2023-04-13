import type { SingleBar } from 'cli-progress'
import c from 'picocolors'
import { resolveCategory, resolveQuestion } from '../io/resolves'
import { createMultiProgressBar } from '../log'
import type { CategoryMeta, CommandOptions, GenerateEventCallbacks } from '../types'
import { renderCategory, renderOutcomes, renderSingleQuestion } from './render'

export async function generateFromCommand(options: CommandOptions) {
  if (Array.isArray(options.identifier) && options.identifier.length > 1)
    generateMulti(options)
  else
    generateSingle(options)
}

export async function generateSingle(options: CommandOptions) {
  options.identifier = Array.isArray(options.identifier)
    ? options.identifier[0]
    : options.identifier

  console.log()
  console.log(c.magenta('generating files...'))
  const { question, error } = await resolveQuestion(options)
  const { lines, errLines } = renderSingleQuestion({ question, error })
  renderOutcomes(lines, errLines)
}

export async function generateMulti(options: CommandOptions) {
  const bars = createMultiProgressBar()
  let questionBar: SingleBar | undefined

  const resolveCate = await generateCategory(options, {
    beforeCategoryStart(category) {
      questionBar = category.questions.length
        ? bars.create(
          category.questions.length,
          0,
          { type: c.green('questions') },
        )
        : undefined
    },
    afterCategoryEnd() {
      questionBar?.stop()
    },
    onQuestionResolved(name, progress, _) {
      questionBar?.update(progress, { name })
    },
  })

  bars.stop()

  const { lines, errLines } = renderCategory(resolveCate)
  renderOutcomes(lines, errLines)
}

export async function generateCategory(options: CommandOptions, callbacks: GenerateEventCallbacks) {
  const {
    category = 'unknown-category',
    tag = 'unknown-tag',
    identifier,
  } = options

  const questions = identifier as string[]
  const cate: CategoryMeta = {
    name: category,
    tagMap: { [tag]: questions },
    questions,
    errors: [],
    resolved: [],
  }

  callbacks.beforeCategoryStart?.(cate)
  const resolvedCategory = await resolveCategory(
    cate,
    options,
    callbacks.onQuestionResolved,
  )
  callbacks.beforeCategoryStart?.(cate)

  return resolvedCategory
}
