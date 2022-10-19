import type { Tag } from '~/types'

export interface RawQuestion {
  questionId: string
  categoryTitle: string
  title: string
  titleSlug: string
  content: string
  difficulty: Difficulty
  exampleTestcases: string
  codeSnippets: Array<{
    lang: string
    code: string
  }>
  tag?: Tag
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Question {
  name: string
  title: string
  difficulty: Difficulty
  tag: Tag
  category: string
  id: number | string
  link: string
  origin: string
}

export interface ImportableQuestions {
  questions: Array<{
    name: string
    tag?: Tag
  }>
}

export interface WritableQuestions {
  questions: Array<Question>
}

export interface GenerateOptions {
  root?: string
  useYaml?: boolean
}

export interface GenerateReturn {
  type: 'markdown' | 'category' | 'code' | 'testcase'
  outFile: string
  content: string
}
