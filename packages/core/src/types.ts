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

// interface ImportableQuestionOptions {
//   category?: Category | string | undefined
//   tag?: Tag | string | undefined
// }

// interface NameImportableQuestionOptions extends ImportableQuestionOptions {
//   name: string
// }

// interface IdImportableQuestionOptions extends ImportableQuestionOptions {
//   id: number
// }

// export type ResolvedImportableQuestionOptions =
//   NameImportableQuestionOptions | IdImportableQuestionOptions

export interface ImportableQuestionOptions {
  id?: number
  name?: string
  category?: Category | string | undefined
  tag?: Tag | string | undefined
}

export interface ImportableQuestions {
  questions: Array<ImportableQuestionOptions>
}

export interface WritableQuestions {
  questions: Array<Question>
}

export interface GenerateReturn {
  type: 'markdown' | 'category' | 'code' | 'testcase'
  outFile: string
  content: string
}
