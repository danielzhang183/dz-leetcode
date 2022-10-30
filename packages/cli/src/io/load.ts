import { existsSync, promises as fs } from 'fs'
import { parse } from 'dz-leetcode'
import type { TagMap } from '../types'

export interface ImportableQuestionOptionBase {
  category?: string
  tag?: string
}

export interface ImportableQuestionOption1 extends ImportableQuestionOptionBase {
  questions: (string | number)[]
}

export interface ImportableQuestionOption2 extends ImportableQuestionOptionBase {
  id: number
}

export interface ImportableQuestionOption3 extends ImportableQuestionOptionBase {
  name: string
}

export type ImportableQuestionOptions =
  | ImportableQuestionOption1
  | ImportableQuestionOption2
  | ImportableQuestionOption3

export interface ImportableQuestions {
  questions: Array<ImportableQuestionOptions>
}

export async function loadCategories(file: string): Promise<Record<string, TagMap> | undefined> {
  if (!existsSync(file))
    return

  const rawContent = await fs.readFile(file, 'utf-8')
  if (!rawContent)
    return

  const content = await parse<ImportableQuestions>(rawContent)?.questions
  if (!content)
    return

  const categories: Record<string, TagMap> = {}
  for (const question of content) {
    const {
      category = 'unknown-category',
      tag = 'unknown-tag',
    } = question
    if (!categories[category])
      categories[category] = {}
    if (!categories[category][tag])
      categories[category][tag] = []

    if ('questions' in question)
      categories[category][tag].push(...question.questions)
    else if ('id' in question)
      categories[category][tag].push(question.id)
    else
      categories[category][tag].push(question.name)
  }

  return categories
}

