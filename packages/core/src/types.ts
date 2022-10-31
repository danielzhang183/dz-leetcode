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
  outFiles: string[]
  lang: string
}

export interface WritableQuestions {
  questions: Array<Question>
}

export type QuestionIdentifier = string | number

export interface CommonOptions {
  cwd?: string
  root?: string
  paths?: {
    doc?: string
    code?: string
  }
  onlyDoc?: boolean
  file?: string
  lang?: string | string[]
  category?: string
  tag?: string
  identifier?: QuestionIdentifier | QuestionIdentifier[] // single or multiple questions identifier<title or id>
  interactive?: boolean
  logLevel?: string
  isResolved?: boolean
}

export interface GenerateOptions extends CommonOptions {
  identifier?: QuestionIdentifier
  write?: boolean
}

export interface GenerateOutcomes {
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

export interface GenerateReturn {
  error?: GenerateError
  question?: ResolvedQuestion
}
