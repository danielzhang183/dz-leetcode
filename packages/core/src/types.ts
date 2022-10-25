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

export type Category =
  | 'algorithm'
  | 'structure'
  | 'interview'
  | 'design'

export type AlgorithmTag =
  | 'back-tracking' | 'bt'
  | 'binary-search' | 'bs'
  | 'dynamic-programming' | 'dp'
  | 'greedy'
  | 'math'
  | 'sort'

export type StructureTag =
  | 'hash-table' | 'ht'
  | 'linked-list' | 'll'
  | 'array'
  | 'heap'
  | 'queue'
  | 'stack'
  | 'tree'

export type Tag = AlgorithmTag | StructureTag

export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Question {
  name: string
  title: string
  id: number | string
  difficulty: Difficulty
  category: Category | string
  tag: Tag
  link: string
  origin: string
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

export interface WritableQuestions {
  questions: Array<Question>
}

export interface GenerateOptions {
  category?: string
  tag?: string
  identifier: string | number | undefined
}

export interface GenerateReturn {
  type: 'markdown' | 'category' | 'code' | 'testcase'
  outFile: string
  content: string
}

export interface GenerateError {
  category?: string
  tag?: string
  error: unknown
  timestamp: number
}

export interface ErrorLogBase {
  timestamp: number
  error: unknown
}

export interface BatchErrorLog extends ErrorLogBase {
  type: 'batch-error'
  file: string
}

export interface SingleErrorLog extends ErrorLogBase {
  type: 'single-error'
  question?: string | number
}

export type RuntimeErrorLog = BatchErrorLog | SingleErrorLog
