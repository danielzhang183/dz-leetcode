import { existsSync, promises as fs } from 'fs'
import { dirname } from 'path'

const isNumber = (val: unknown): val is number => typeof val === 'number'

const camelizeRE = /-(\w)/g
export const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = (str: string): string => str.replace(hyphenateRE, '-$1').toLowerCase()

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export function pad<T extends string | number>(val: T, len = 3): T {
  const length = String(val).length || 0
  const num = length > len ? val : '0'.repeat(len - length) + val
  return (isNumber(val) ? Number(num) : num) as T
}

export async function readFile(file: string) {
  if (!existsSync(file))
    return undefined
  return await fs.readFile(file, 'utf-8')
}

export async function writeFile(outFile: string, content: string) {
  const dir = dirname(outFile)
  if (!existsSync(dir))
    fs.mkdir(dir, { recursive: true })
  await fs.writeFile(outFile, content, 'utf-8')
}
