import { resolve } from 'path'
import { createConfigLoader } from 'unconfig'
import createDebug from 'debug'
import deepmerge from 'deepmerge'
import { isString, toArray } from './utils'
import type { CommonOptions } from './types'

const debug = createDebug('dz-leetcode:config')

export function normalizeConfig<T extends CommonOptions>(options: T): T {
  const {
    root = process.cwd(),
    paths = {},
  } = options

  const { code, doc } = paths
  paths.code = resolve(root, code || './packages/code')
  paths.doc = resolve(root, doc || './packages/docs')

  options.root = root
  options.paths = paths
  options.lang = toArray(options.lang).flatMap(i => i.split(','))
  options.identifier = toArray(options.identifier).flatMap(i => (isString(i) && i.split(',')) || i)
  options.isResolved = true

  return options
}

export async function resolveConfig<T extends CommonOptions>(options: T): Promise<T> {
  if (options.isResolved)
    return options

  options = normalizeConfig(options)

  const loader = createConfigLoader<CommonOptions>({
    sources: [
      {
        files: [
          'leetcode.config',
        ],
      },
      {
        files: [
          '.leetcoderc',
        ],
        extensions: ['json', ''],
      },
    ],
    cwd: options.cwd || process.cwd(),
    merge: false,
  })

  const config = await loader.load()

  if (!config.sources.length)
    return options

  debug(`config file found ${config.sources[0]}`)
  const configOptions = normalizeConfig(config.config)

  return deepmerge(options, configOptions) as T
}
