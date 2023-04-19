import type { SingleBar } from 'cli-progress'
import c from 'picocolors'
import { loadCategories } from '../io/loader'
import { resolveCategory } from '../io/resolves'
import { createMultiProgressBar } from '../log'
import type { CategoryMeta, FileOptions, GenerateEventCallbacks } from '../types'
import { renderCategories, renderOutcomes } from './render'

export async function generateFromFile(options: FileOptions) {
  const bars = createMultiProgressBar()
  let categoriesBar: SingleBar | undefined
  const questionBar = bars.create(1, 0)

  const resolvedCategories = await generateCategories(options, {
    afterCategoriesLoaded(categories) {
      categoriesBar = categories.length
        ? bars.create(
          categories.length,
          0,
          { type: c.green('categories'), name: c.cyan(categories[0].name) },
        )
        : undefined
    },
    beforeCategoryStart(category) {
      categoriesBar?.increment(0, { name: c.cyan(category.name) })
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

  if (!resolvedCategories)
    return

  const { lines, errLines } = renderCategories(resolvedCategories)
  renderOutcomes(lines, errLines)
}

export async function generateCategories(options: FileOptions, callbacks: GenerateEventCallbacks) {
  if (!options.file) {
    renderOutcomes([], [c.red('Import file not found! Please pass `-f` option or config `file` option.')])
    return
  }

  const loadedCategories = await loadCategories(options.file)
  if (!loadedCategories) {
    renderOutcomes([], [c.red(`load ${c.underline(options.file)} content error`)])
    return
  }

  const categories: CategoryMeta[] = Object.entries(loadedCategories)
    // only check questions with more than one to supply
    .filter(i => Object.keys(i[1]).length > 0)
    // sort by the number of questions
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .map(([name, tagMap]) => ({
      name,
      tagMap,
      questions: Object.values(tagMap).flat(1),
      resolved: [],
      errors: [],
    }))

  callbacks.afterCategoriesLoaded?.(categories)

  const resolvedCategories = await Promise.all(
    categories.map(async (category) => {
      callbacks.beforeCategoryStart?.(category)
      const data = await resolveCategory(
        category,
        options,
        callbacks.onQuestionResolved,
      )
      callbacks.afterCategoryEnd?.(category)
      return data
    }),
  )

  callbacks.afterCategoriesEnd?.(resolvedCategories)

  return resolvedCategories
}
