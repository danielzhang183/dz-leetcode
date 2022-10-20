import type { Category, Difficulty, Question, Tag } from '../../docs/src/types'

export interface CodeSnippet {
  lang: string
  code: string
}

export interface TestCase {
  toBe: string
  expect: string
}

export interface TopicTag {
  slug: string
  translatedName: string
}

export interface RawQuestion {
  questionId: string
  categoryTitle: string
  title: string
  titleSlug: string
  content: string
  difficulty: Difficulty
  exampleTestcases: string
  codeSnippets: Array<CodeSnippet>
  topicTags: Array<TopicTag>
}

export interface ResolvedQuestion {
  questionId: string
  category: string
  title: string
  titleSlug: string
  content: string
  difficulty: Difficulty
  testcases: Array<TestCase>
  code: string
  functionName: string
  tag: Tag | string
  path: string
  origin: string
}

export interface ImportableQuestionOption {
  name: string
  category?: Category | string | undefined
  tag?: Tag | string | undefined
}

export interface ImportableQuestions {
  questions: Array<ImportableQuestionOption>
}

export interface WritableQuestions {
  questions: Array<Question>
}

export interface GenerateReturn {
  type: 'markdown' | 'category' | 'code' | 'testcase'
  outFile: string
  content: string
}
