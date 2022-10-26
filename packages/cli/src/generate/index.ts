/* eslint-disable no-console */
import c from 'picocolors'
import type { SingleBar } from 'cli-progress'
import { createMultiProgresBar } from '../log'
import type { CategoryMeta } from '../types'
import { resolveCategory, resolveQuestion } from '../io/resolves'
import { loadCategories } from '../io/category'
import type { FileCliOptions, PickCliOptions } from '../cli'
import { renderCategories, renderCategory, renderOutcomes, renderSingleQuestion } from './render'

export interface FileOptions extends FileCliOptions {
  file: string
  logLevel: string
}

export interface CommandOptions extends PickCliOptions {
  identifier: string
  identifiers?: string[]
  logLevel: string
}

export async function generateFromCommand(options: CommandOptions) {
  if (options.identifier.split(',').length > 1)
    generateMulti(options)
  else
    generateSingle(options)
}

export async function generateFromFile(options: FileOptions) {
  const bars = createMultiProgresBar()
  let categoriesBar: SingleBar | undefined
  const questionBar = bars.create(1, 0)

  const resolveCates = await generateCategories(options, {
    afterCategoriesLoaded(categories) {
      categoriesBar = categories.length
        ? bars.create(
          categories.length,
          0,
          { type: c.green('categories'), name: c.cyan(categories[0].category) },
        )
        : undefined
    },
    beforeCategoryStart(category) {
      categoriesBar?.increment(0, { name: c.cyan(category.category) })
      questionBar?.start(category.questions.length, 0, { type: c.green('question') })
    },
    afterCategoryEnd() {
      categoriesBar?.increment(1)
      questionBar?.stop()
    },
    onQuestionResolved(name, progress, _) {
      questionBar?.update(progress, { name })
    },
  })

  bars.stop()

  // if (!resolvedUsages) {
  //   printErrorLogs({
  //     type: 'batch-error',
  //     timestamp: Date.now(),
  //     error: `${options.file} have no import data`,
  //     file: options.file,
  //   })
  // }

  const { lines, errLines } = renderCategories(resolveCates!)
  renderOutcomes(lines, errLines)
}

export interface GenerateEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMeta[]) => void
  beforeCategoryStart?: (category: CategoryMeta) => void
  afterCategoryEnd?: (category: CategoryMeta) => void
  afterCategoriesEnd?: (categories: CategoryMeta[]) => void
  onQuestionResolved?: (name: string, progress: number, total: number) => void
}

export async function generateSingle(options: CommandOptions) {
  const {
    category = 'unknown-category',
    tag = 'unknown-tag',
    identifier,
  } = options

  console.log()
  console.log(c.magenta('generating...'))
  const { question, error } = await resolveQuestion(category, tag, identifier)
  const { lines, errLines } = renderSingleQuestion({ question, error })
  renderOutcomes(lines, errLines)
}

export async function generateMulti(options: CommandOptions) {
  const bars = createMultiProgresBar()
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

  const questions = identifier.split(',')
  const unresolvedCate: CategoryMeta = {
    category,
    tagMap: { [tag]: questions },
    questions,
    errors: [],
    resolved: [],
  }

  callbacks.beforeCategoryStart?.(unresolvedCate)
  const resloveCate = await resolveCategory(unresolvedCate, callbacks.onQuestionResolved)
  callbacks.beforeCategoryStart?.(unresolvedCate)

  return resloveCate
}

export async function generateCategories(options: FileOptions, callbacks: GenerateEventCallbacks) {
  const categories = await loadCategories(options.file)
  if (!categories)
    return

  const unresolvedCates: CategoryMeta[] = Object.entries(categories!)
    // only check questions with more than one to supply
    .filter(i => Object.keys(i[1]).length > 1)
    // sort by the number of questions
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .map(([category, tagMap]) => ({
      category,
      tagMap,
      questions: Object.values(tagMap).flat(1),
      resolved: [],
      errors: [],
    }))

  callbacks.afterCategoriesLoaded?.(unresolvedCates)

  const resolveCates = await Promise.all(
    unresolvedCates.map(async (unresolvedCate) => {
      callbacks.beforeCategoryStart?.(unresolvedCate)
      const data = await resolveCategory(unresolvedCate, callbacks.onQuestionResolved)
      callbacks.afterCategoryEnd?.(unresolvedCate)
      return data
    }),
  )

  callbacks.afterCategoriesEnd?.(resolveCates)

  return resolveCates
}
