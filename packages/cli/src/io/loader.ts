import { parse, readFile } from 'dz-leetcode'
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

export interface ImportableQuestionOption4 extends ImportableQuestionOptionBase {
  title: string
}

export type ImportableQuestionOptions =
  | ImportableQuestionOption1
  | ImportableQuestionOption2
  | ImportableQuestionOption3
  | ImportableQuestionOption4

export interface ImportableQuestions {
  questions: Array<ImportableQuestionOptions>
}

export async function loadCategories(filepath: string): Promise<Record<string, TagMap> | undefined> {
  const questions = await loadQuestions(filepath)
  if (!questions)
    return

  const categories: Record<string, TagMap> = {}
  for (const question of questions) {
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
    else if ('title' in question)
      categories[category][tag].push(question.title)
    else if ('name' in question)
      categories[category][tag].push(question.name)
    else
      categories[category][tag].push(question.id)
  }

  return categories
}

export async function loadQuestions<T extends ImportableQuestions>(filepath: string): Promise<T['questions'] | undefined> {
  const content = await readFile(filepath)
  if (!content)
    return

  return await parse<T>(content)?.questions
}
