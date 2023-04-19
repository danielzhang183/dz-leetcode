import { resolve } from 'node:path'
import { resolveFiles, rmRecursive } from '../io/fs'
import { generateFromFile } from './file'

export async function cleanup(root = process.cwd(), needCatalog = true) {
  console.log('Cleaning up generated dz-leetcode files...')
  const dirs = [
    'packages/code/src',
    'packages/code/test',
    'packages/docs/pages',
  ]
  if (!needCatalog)
    dirs.push('packages/code/data')
  await rmRecursive(dirs.map(dir => resolve(root, dir)))
}

export async function reset(root = process.cwd()) {
  await cleanup(root, false)
  console.log('Regenerating dz-leetcode files...')
  const files = await resolveFiles(
    root,
    'packages/docs/data/**/*.yml',
  )
  await Promise.all(files.map(async file => await generateFromFile({ file })))
}
