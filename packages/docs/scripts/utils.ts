import { existsSync, promises as fs } from 'fs'
import { dirname } from 'path'

const camelizeRE = /-(\w)/g
export const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = (str: string): string => str.replace(hyphenateRE, '-$1').toLowerCase()

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export function pad(num: string | number, len = 3): number {
  const length = String(num).length || 0
  if (length > len)
    return Number(num)
  return Number('0'.repeat(len - length) + num)
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
