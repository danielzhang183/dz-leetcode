import type { Category, Difficulty, Question, Tag } from '~/types'

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
  tag: Tag
}

export interface ResolvedQuestion {
  questionId: string
  category: string
  title: string
  titleSlug: string
  content: string
  difficulty: Difficulty
  exampleTestcases: string
  code: string
  functionName: string
}

export interface ImportableQuestionOptions {
  name: string
  category?: Category
  tag?: Tag
}

export interface ImportableQuestions {
  questions: Array<ImportableQuestionOptions>
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
