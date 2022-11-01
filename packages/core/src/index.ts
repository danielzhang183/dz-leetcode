import type { CommonOptions } from './types'

export * from './generate'
export * from './config'
export * from './io'
export * from './question'
export * from './types'
export * from './utils'
export * from './utils/sort'

export function defineConfig(config: Partial<CommonOptions>) {
  return config
}
