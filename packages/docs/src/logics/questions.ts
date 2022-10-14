import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { promises as fs } from 'fs'
import yaml from 'js-yaml'
import type { Module, Question, Tag } from '~/types'

const root = dirname(fileURLToPath(import.meta.url))
const pathData = resolve(root, '../..', 'data')

export async function getQuestions(module: Module, tag: Tag): Promise<Question[]> {
  const content = await yaml.load(await fs.readFile(
    join(pathData, module, `${tag}.yml`),
    'utf-8',
  )) as { questions: Question[] }
  return content.questions
}
