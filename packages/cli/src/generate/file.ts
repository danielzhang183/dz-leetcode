import type { SingleBar } from 'cli-progress'
import c from 'picocolors'
import { loadCategories } from '../io/load'
import { resolveCategory } from '../io/resolves'
import { createMultiProgresBar } from '../log'
import type { CategoryMeta, FileOptions, GenerateEventCallbacks } from '../types'
import { renderCategories, renderOutcomes } from './render'

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

  // TODO: handle resolveCates is null

  const { lines, errLines } = renderCategories(resolveCates!)
  renderOutcomes(lines, errLines)
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
      const data = await resolveCategory(
        unresolvedCate,
        options,
        callbacks.onQuestionResolved,
      )
      callbacks.afterCategoryEnd?.(unresolvedCate)
      return data
    }),
  )

  callbacks.afterCategoriesEnd?.(resolveCates)

  return resolveCates
}
