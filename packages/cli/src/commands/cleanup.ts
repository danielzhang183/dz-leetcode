import { resolve } from 'node:path'
import pLimit from 'p-limit'
import c from 'picocolors'
import { mkdirRecursive, resolveFiles, rmRecursive } from '../io/fs'
import type { CleanupOptions, FileOptions } from '../types'
import { generateFromFile } from './file'

export const PACKAGE_ROOT = resolve(process.cwd(), 'packages')

export async function cleanup(root = PACKAGE_ROOT, deleteCatalog = true) {
  console.log(c.magenta('Cleaning up generated dz-leetcode files...'))
  console.log()

  const dirs = [
    'code/src',
    'code/test',
    'docs/src/pages',
  ]
  if (deleteCatalog)
    dirs.push('docs/data')
  await rmRecursive(dirs.map(dir => resolve(root, dir)))
  await mkdirRecursive(dirs.map(dir => resolve(root, dir, 'a.ts')))
}

export async function reset(options: CleanupOptions) {
  // await cleanup('', false)
  console.log(c.magenta('Regenerating dz-leetcode files...'))
  console.log(options.paths!.doc!)

  const files = await resolveFiles(options.paths!.doc!, 'data/algorithms/sorting.yml')
  const limit = pLimit(1)
  await Promise.all(files.map(async file => limit(async (file) => {
    options.file = file
    await generateFromFile(options as FileOptions)
  }, file)))
}
