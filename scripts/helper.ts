import { resolve } from 'path'
import { NL } from '@alexzzz/nl'
import Topic from '../data/topic.json'

export const root = process.cwd()

export const withRoot = (path: string) => resolve(root, path)

export function getTargetDir(targetFile: string): string {
  return resolve(root, './data/topic/', targetFile)
}

export function getTargetPath(targetPath: string): string {
  return `/Topic/${targetPath}`
}

export function getGeneratePath(type: string, count: string) {
  const basePath = Topic.find(item => item.name === type)?.path_name
  return `${basePath}/${padStart(count, 5, '0')}`
}

export function padStart(source: string, count: number, padStr: string): string {
  let final = source.toString()
  for (let i = final.length; i < count; i++)
    final = padStr + final
  return final
}

export function FirstUpperCase(str: string) {
  return str.replace(/(\w)/, (_, l) => l.toUpperCase())
}

export const taskLogger = new NL('任务', true)
