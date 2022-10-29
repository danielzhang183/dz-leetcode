import { existsSync, promises as fs } from 'fs'
import { dirname } from 'path'
import YAML from 'js-yaml'
import type { WritableQuestions } from './types'

export function parse<T>(raw: string): T | undefined {
  raw = raw.trim()
  if (!raw)
    return

  return (raw.startsWith('['))
    ? JSON.parse(raw)
    : YAML.load(raw)
}

export function stringify(obj: WritableQuestions, useYaml = true) {
  if (!Object.keys(obj).length)
    return

  return useYaml
    ? YAML.dump(obj, { indent: 2 }).trimEnd()
    : Object.keys(obj).length > 1
      ? JSON.stringify(obj, null, 2)
      : JSON.stringify(obj)
}

export async function readFile(file: string) {
  if (!existsSync(file))
    return

  return await fs.readFile(file, 'utf-8')
}

export async function writeFile(outFile: string, content: string) {
  const dir = dirname(outFile)
  if (!existsSync(dir))
    await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(outFile, content, 'utf-8')
}
