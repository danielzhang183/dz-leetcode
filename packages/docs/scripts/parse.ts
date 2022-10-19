import YAML from 'js-yaml'
import type { ImportableQuestions, WritableQuestions } from './types'

export function parse<T extends ImportableQuestions | WritableQuestions>(raw: string): T | undefined {
  raw = raw.trim()
  if (!raw)
    return undefined
  return (raw.startsWith('{'))
    ? JSON.parse(raw)
    : YAML.load(raw)
}

export function stringify(obj: WritableQuestions, useYaml = true) {
  if (!Object.keys(obj).length)
    return undefined
  return useYaml
    ? YAML.dump(obj, { indent: 2 }).trimEnd()
    : Object.keys(obj).length > 1
      ? JSON.stringify(obj, null, 2)
      : JSON.stringify(obj)
}
