import { resolve } from 'path'
import type { ImportableQuestions } from 'dz-leetcode'
import { parse, readFile } from 'dz-leetcode'

const root = process.cwd()
const file = 'examples/questions.yml'
const absolute = resolve(root, '../..', file)

export async function loadQuestions() {
  return parse<ImportableQuestions>(await readFile(absolute) || '')?.questions
}
