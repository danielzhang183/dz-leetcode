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

  const logger = new TableLogger({
    columns: 4,
    align: 'LRRR',
    logLevel: options.logLevel,
  })

  let depBar: SingleBar | undefined

  const resolvedUsages = await checkUsages(options, {
    onLoaded(usages) {
      depBar = bars.create(usages.length, 0, { type: c.green('categories') })
    },
    onResolved(_, categroy) {
      depBar?.increment(1, { name: categroy })
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
  onLoaded?: (usage: CategoryMap[]) => void
  onResolved?: (category: string, progress: number, total: number) => void
}

export async function checkUsages(options: UsageOptions, callbacks: UsageEventCallbacks) {
  const categories = await loadCategories(options.file)

  const usages: CategoryMap[] = Object.entries(categories!)
    // only check questions with more than one to supply
    .filter(i => Object.keys(i[1]).length > 1)
    // sort by the number of questions
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .map(([category, tagMap]) => ({ category, tagMap }))

  callbacks.onLoaded?.(usages)

  let progress = 0
  const total = usages.length

  const resolveUsages = await Promise.all(
    usages.map(async ({ category, tagMap }) => {
      const data = await resolveCategoryData(category, tagMap)
      progress += 1
      callbacks.onResolved?.(category, progress, total)
      return data
    }),
  )

  return resolveUsages
}
