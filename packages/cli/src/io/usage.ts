import c from 'picocolors'
import type { SingleBar } from 'cli-progress'
import type { Difficulty } from 'dz-leetcode'
import { TableLogger, createMultiProgresBar } from '../log'
import type { CategoryMap } from '../types'
import { resolveCategoryData } from './resolves'
import { loadCategories } from './category'

export interface UsageOptions {
  file: string
  logLevel: string
}

const difficultyColorMap: Record<Difficulty, string> = {
  Easy: 'green',
  Medium: 'magenta',
  Hard: 'red',
}

export async function usage(options: UsageOptions) {
  const bars = createMultiProgresBar()
  let categoriesBar: SingleBar | undefined
  const questionBar = bars.create(1, 0)

  const resolveCategories: any[] = []

  const logger = new TableLogger({
    columns: 4,
    align: 'LRRR',
    logLevel: options.logLevel,
  })

  const resolvedUsages = await checkUsages(options, {
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
      questionBar?.start(category.tagMap.length, 0, { type: c.green('question') })
    },
    afterCategoryEnd(category) {
      categoriesBar?.increment(1)
      questionBar?.stop()
      resolveCategories.push(category)
    },
    onQuestionResolved(_, name, progress) {
      questionBar?.update(progress, { name })
    },
  })

  bars.stop()

  for (const { category, tagMap } of resolvedUsages) {
    const tags = Object.keys(tagMap).sort()
    if (!tags.length)
      continue

    const questionCount = Object.values(tagMap).flatMap(i => i).length
    // const pad = Math.max(8, ...Object.keys(tagMap).map(i => i.length)) + 2
    for (const [tag, questions] of Object.entries(tagMap)) {
      logger.log()
      logger.log(`${c.blue(`${category} > ${tag}`)}  -  ${c.yellow(questionCount)} add`)
      logger.log()
      questions.forEach(({ title, questionId, difficulty, path }) => {
        const color = difficultyColorMap[difficulty]
        logger.row(
          title,
          c.gray(questionId),
          // @ts-expect-error missing
          c[color](difficulty),
          c.gray(path),
        )
      })
    }
  }

  logger.log()
  logger.output()
}

export interface UsageEventCallbacks {
  afterCategoriesLoaded?: (categories: CategoryMap[]) => void
  beforeCategoryStart?: (category: CategoryMap) => void
  afterCategoryEnd?: (category: CategoryMap) => void
  afterCategoriesEnd?: (categories: CategoryMap[]) => void
  onQuestionResolved?: (category: string, progress: number, total: number) => void
}

export async function checkUsages(options: UsageOptions, callbacks: UsageEventCallbacks) {
  const categories = await loadCategories(options.file)

  const unresolvedCategories: CategoryMap[] = Object.entries(categories!)
    // only check questions with more than one to supply
    .filter(i => Object.keys(i[1]).length > 1)
    // sort by the number of questions
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .map(([category, tagMap]) => ({ category, tagMap, questions: Object.values(tagMap).flat(1) }))

  callbacks.afterCategoriesLoaded?.(unresolvedCategories)

  // let progress = 0
  const total = unresolvedCategories.length

  const resolveUsages = await Promise.all(
    unresolvedCategories.map(async (unresolvedCategory) => {
      callbacks.beforeCategoryStart?.(unresolvedCategory)

      const { category, tagMap } = unresolvedCategory
      const data = await resolveCategoryData(category, tagMap)
      callbacks.onQuestionResolved?.(category, progress, total)

      callbacks.afterCategoryEnd?.(unresolvedCategory)
      return data
    }),
  )

  // callbacks.afterCategoriesEnd?.()

  return resolveUsages
}
