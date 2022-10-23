// import c from 'picocolors'
// import type { SingleBar } from 'cli-progress'
import { TableLogger, createMultiProgresBar } from '../log'
// import { Category } from './../../../docs/src/types'

export interface UsageOptions {
  logLevel: string
}

export async function usage(options: UsageOptions) {
  const bars = createMultiProgresBar()

  const logger = new TableLogger({
    columns: 4,
    align: 'LRRR',
    logLevel: options.logLevel,
  })

  // let depBar: SingleBar | undefined

  // const resolvedUsages = await checkUsage(options, {
  //   onLoaded(usages) {
  //     depBar = bars.create(usages.length, 0, { type: c.green('tags') })
  //   },
  //   onResolved(_, categroy) {
  //     depBar?.increment(1, { name: categroy })
  //   },
  // })

  bars.stop()

  // for (const { name, id, difficulty, origin } of resolvedUsages) {
  //   const difficultyColorMap: Record<Difficulty, string> = {
  //     Easy: 'green',
  //     Medium: 'magenta',
  //     Hard: 'red',
  //   }
  //   const color = difficultyColorMap[difficulty]
  //   logger.row(
  //     c.green(name),
  //     c.gray(id),
  //     c[color](difficulty),
  //     c.gray(origin),
  //   )
  // }

  logger.log()
  logger.output()
}

export interface UsageEventCallbacks {
  onLoaded?: () => void
  onResolved?: () => void
}

// export async function checkUsages(options: UsageOptions, callbacks: UsageEventCallbacks) {
//   const packages = await loadPackages(options)
//   const names: Record<string, Record<string, PackageMeta[]>> = {}

//   for (const pkg of packages) {
//     for (const dep of pkg.deps) {
//       if (!names[dep.name])
//         names[dep.name] = {}
//       if (!names[dep.name][dep.currentVersion])
//         names[dep.name][dep.currentVersion] = []

//       names[dep.name][dep.currentVersion].push(pkg)
//     }
//   }

//   const usages: UnresolvedUsage[] = Object.entries(names)
//   // only check deps with more then 1 version in use
//     .filter(i => Object.keys(i[1]).length > 1)
//   // sort by the number of versions
//     .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
//     .map(([name, versionMap]) => ({ name, versionMap }))

//   callbacks.onLoaded?.(usages)

//   let progress = 0
//   const total = usages.length

//   const resolveUsages = await Promise.all(
//     usages.map(async ({ name, versionMap }) => {
//       const { tags } = await getPackageData(name)
//       progress += 1
//       callbacks.onDependencyResolved?.(null, name, progress, total)
//       return { name, versionMap, latest: tags.latest || '' }
//     }),
//   )

//   return resolveUsages
// }
