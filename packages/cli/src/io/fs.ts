import { promises as fsp } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { globby } from 'globby'
import fs from 'fs-extra'
import { isString } from '../utils'

export async function rmRecursive(paths: string[]) {
  await Promise.all(paths.filter(p => isString(p)).map(async (path) => {
    console.debug('Removing recursive path', path)
    await fsp.rm(path, { recursive: true, force: true }).catch(() => {})
  }))
}

export async function mkdirRecursive(paths: string[]) {
  await Promise.all(paths.filter(p => isString(p)).map(async (path) => {
    console.debug('Making dir recursive path', path)
    const dir = dirname(path)
    if (!fs.existsSync(dir))
      await fsp.mkdir(dir, { recursive: true }).catch(() => {})
  }))
}

export async function resolveFiles(
  path: string,
  pattern: string | string[],
  opts: { followSymbolicLinks?: boolean } = {},
) {
  const files = await globby(
    pattern,
    {
      cwd: path,
      followSymbolicLinks: opts.followSymbolicLinks ?? false,
    },
  )
  return files.map(p => resolve(path, p)).sort()
}
