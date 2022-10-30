import { createConfigLoader } from 'unconfig'
import createDebug from 'debug'
import deepmerge from 'deepmerge'
import { toArray } from './utils'
import type { CommonOptions } from './types'

const debug = createDebug('dz-leetcode:config')

export function normalizeConfig<T extends CommonOptions>(options: T): T {
  options.lang = toArray(options.lang).flatMap(i => i.split(','))
  options.identifier = toArray(options.identifier).flatMap(i => i.split(','))

  return options
}

export async function resolveConfig<T extends CommonOptions>(options: T): Promise<T> {
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
