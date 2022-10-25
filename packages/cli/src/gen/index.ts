/* eslint-disable no-console */
import c from 'picocolors'
import type { SingleBar } from 'cli-progress'
import { createMultiProgresBar } from '../log'
import type { CategoryMeta } from '../types'
import { resolveCategoryData } from '../io/resolves'
import { loadCategories } from '../io/category'
import { renderCategories } from './render'

export interface GenOptions {
  file: string
  logLevel: string
}

export async function gen(options: GenOptions) {
  const bars = createMultiProgresBar()
  let categoriesBar: SingleBar | undefined
  const questionBar = bars.create(1, 0)

  const resolveCategories = await generateCategories(options, {
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
    onQuestionResolved(_, name, progress) {
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

  const { lines, errLines } = renderCategories(resolveCategories!)
  console.log(lines.join('\n'))

  if (errLines.length) {
    console.error(c.inverse(c.red(c.bold(' ERROR '))))
    console.error()
    console.error(errLines.join('\n'))
    console.error()
  }
}

export interface GenerateEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMeta[]) => void
  beforeCategoryStart?: (category: CategoryMeta) => void
  afterCategoryEnd?: (category: CategoryMeta) => void
  afterCategoriesEnd?: (categories: CategoryMeta[]) => void
  onQuestionResolved?: (category: string, progress: number, total: number) => void
}

export async function generateCategories(options: GenOptions, callbacks: GenerateEventCallbacks) {
  const categories = await loadCategories(options.file)
  if (!categories)
    return

  const unresolvedCategories: CategoryMeta[] = Object.entries(categories!)
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

  callbacks.afterCategoriesLoaded?.(unresolvedCategories)

  const resolveCategories = await Promise.all(
    unresolvedCategories.map(async (unresolvedCategory) => {
      callbacks.beforeCategoryStart?.(unresolvedCategory)
      const data = await resolveCategoryData(unresolvedCategory, callbacks.onQuestionResolved)
      callbacks.afterCategoryEnd?.(unresolvedCategory)
      return data
    }),
  )

  callbacks.afterCategoriesEnd?.(resolveCategories)

  return resolveCategories
}
