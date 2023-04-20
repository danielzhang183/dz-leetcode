import { join } from 'path'
import { $fetch } from 'ohmyfetch'
import { hyphenate, isNumber, pad, toArray } from './utils'
import type { CodeSnippet, CommonOptions, Question, QuestionIdentifier, RawQuestion, ResolvedQuestion, Tag, TestCase, TopicTag } from './types'

const LEETCODE_FETCH_URL = 'https://leetcode.cn/graphql/'
const LEETCODE_QUESTION_URL = 'https://leetcode.cn/problems'
const LEETCODE_LIST_QUERY = [
  'query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {',
  '  problemsetQuestionList(',
  '    categorySlug: $categorySlug',
  '    limit: $limit',
  '    skip: $skip',
  '    filters: $filters',
  '  ) {',
  '    hasMore',
  '    total',
  '    questions {',
  '      difficulty',
  '      frontendQuestionId',
  '      titleSlug',
  '    }',
  '  }',
  '}',
].join('\n')
const LEETCODE_QUESTION_QUERY = [
  'query questionData($titleSlug: String!) {',
  '  question(titleSlug: $titleSlug) {',
  '    questionFrontendId',
  '    categoryTitle',
  '    title',
  '    translatedTitle',
  '    titleSlug',
  '    content',
  '    translatedContent',
  '    difficulty',
  '    exampleTestcases',
  '    codeSnippets {',
  '      lang',
  '      code',
  '    }',
  '    topicTags {',
  '      slug',
  '       translatedName',
  '    }',
  '  }',
  '}',
].join('\n')
const LEETCODE_TAGS_QUERY = [
  'query questionTagTypeWithTags {',
  '  questionTagTypeWithTags {',
  '    name',
  '    transName',
  '    tagRelation {',
  '      questionNum',
  '      tag {',
  '        name',
  '        id',
  '        nameTranslated',
  '        slug',
  '      }',
  '    }',
  '  }',
  '}',
].join('\n')

export interface FilterOptions {
  category?: string
  tag?: string
  difficulty?: string
  skip?: number
}

export interface ResolvedFilterOptions {
  listId?: string
  tags?: string[]
  difficulty?: string
}

export interface RandomQuestion {
  difficulty: string
  questionId: string
  titleSlug: string
}

export interface BaseMeta {
  name: string
  nameTranslated: string
}

export interface TagMeta extends BaseMeta {
  id: string
  slug: string
}

export interface CategoryMap extends BaseMeta {
  tagMap: Array<{
    questionNum: number
    tag: TagMeta
  }>
}

export function getCategoryMaps(): Promise<CategoryMap[]> {
  return $fetch(LEETCODE_FETCH_URL, {
    method: 'post',
    body: {
      query: LEETCODE_TAGS_QUERY,
      variables: {},
    },
  }).then(
    r => r.data.questionTagTypeWithTags.map((i: any): CategoryMap => ({
      name: i.name,
      nameTranslated: i.transName,
      tagMap: i.tagRelation,
    })) || [],
  )
}

export async function getQuestion(identifier: QuestionIdentifier) {
  return isNumber(identifier)
    ? await getQuestionById(identifier)
    : await getQuestionByTitle(identifier)
}

export function getQuestionsByFilter(options: FilterOptions): Promise<RandomQuestion[]> {
  const {
    category,
    tag,
    difficulty,
    skip = 0,
  } = options

  const filters: ResolvedFilterOptions = {}
  if (category)
    filters.listId = category
  if (tag)
    filters.tags = tag.split(',')
  if (difficulty)
    filters.difficulty = difficulty.toUpperCase()

  return $fetch(LEETCODE_FETCH_URL, {
    method: 'post',
    body: {
      query: LEETCODE_LIST_QUERY,
      variables: {
        categorySlug: '',
        skip,
        limit: 100,
        filters: {
          orderBy: 'FRONTEND_ID',
          sortOrder: 'DESCENDING',
          ...filters,
        },
      },
    },
  }).then(
    r => r.data?.problemsetQuestionList?.questions.map((i: any): RandomQuestion => ({
      difficulty: i.difficulty,
      titleSlug: i.titleSlug,
      questionId: i.frontendQuestionId,
    })) || [],
  )
}

export async function getQuestionById(id: number): Promise<RawQuestion | undefined> {
  const titleSlug = await $fetch(LEETCODE_FETCH_URL, {
    method: 'post',
    body: {
      query: LEETCODE_LIST_QUERY,
      variables: {
        categorySlug: '',
        skip: id - 1,
        limit: 1,
        filters: {},
      },
    },
  }).then(r => r.data.problemsetQuestionList.questions[0]?.titleSlug)

  return titleSlug ? await getQuestionByTitle(titleSlug) : undefined
}

export function getQuestionByTitle(titleSlug: string): Promise<RawQuestion | undefined> {
  return $fetch(LEETCODE_FETCH_URL, {
    method: 'post',
    body: {
      operationName: 'questionData',
      query: LEETCODE_QUESTION_QUERY,
      variables: { titleSlug },
    },
  }).then((r) => {
    const question = r.data?.question || undefined
    if (question)
      question.questionId = question.questionFrontendId
    return question
  })
}

export const getQuestionPath = (
  category: string,
  tag: Tag | string,
  questionId: string | number,
  ext?: '.md' | '.ts' | '.test.ts' | '.yml' | '.yaml' | '.json',
) => join(
  hyphenate(category),
  hyphenate(tag),
  `${pad(questionId)}${ext ?? ''}`,
)

export const getQuestionOrigin = (titleSlug: string) => `${LEETCODE_QUESTION_URL}/${titleSlug}`

export function normalizeRawQuestion(question: RawQuestion, options: CommonOptions = {}): ResolvedQuestion {
  const {
    category,
    tag,
    isTranslated = false,
  } = options || {}
  const lang = options.lang
    ? toArray(options.lang).flatMap(i => i.split(','))
    : ['typescript', 'javascript']

  function normalizeTestCases(exampleTestcases: string): TestCase[] {
    const regex = /<strong>Input:<\/strong> \w+ = (.*?)(, target = (.*?))?\s*<strong>Output:<\/strong> (\[*[\w\d,]+\]*)/gm
    const testcases: TestCase[] = []
    let m
    // eslint-disable-next-line no-cond-assign
    while ((m = regex.exec(exampleTestcases)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex)
        regex.lastIndex++

      const hasTarget = !!m[3]
      hasTarget
        ? testcases.push({ expect: `${m[1]}, ${m[3]}`, toBe: m[4] })
        : testcases.push({ expect: m[1], toBe: m[4] })
    }

    return testcases
  }

  function normalizeCode(codeSnippets: CodeSnippet[]): { code: string; lang: string } {
    for (const l of lang) {
      const codesnippet = codeSnippets?.find(i => i.lang.toLowerCase() === l)
      if (codesnippet) {
        return {
          code: codesnippet.code,
          lang: codesnippet.lang.toLowerCase(),
        }
      }
    }
    return {
      code: '',
      lang: lang[0],
    }
  }

  function normalizeFunctionName(code: string): string {
    const re = /function \*?(\w+)\(/
    return code?.match(re)?.[1] || 'fn'
  }

  function normalizeTag(tag: string | TopicTag[]): string {
    return hyphenate(Array.isArray(tag) ? tag[0].slug : tag)
  }

  const { code, lang: language } = normalizeCode(question.codeSnippets)
  const normalizedCategory = hyphenate(category || question.categoryTitle)
  const normalizedTag = normalizeTag(tag || question.topicTags)

  return {
    questionId: question.questionId,
    category: normalizedCategory,
    tag: normalizedTag,
    tags: question.topicTags.map(i => isTranslated ? i.translatedName : i.slug),
    title: isTranslated ? question.translatedTitle : question.title,
    titleSlug: question.titleSlug,
    content: isTranslated ? question.translatedContent : question.content,
    difficulty: question.difficulty,
    testcases: normalizeTestCases(question.content),
    code,
    functionName: normalizeFunctionName(code),
    path: getQuestionPath(normalizedCategory, normalizedTag, question.questionId),
    origin: getQuestionOrigin(question.titleSlug),
    outFiles: [],
    lang: language,
    isTranslated,
  }
}

export function normalizeResolvedQuestion(question: ResolvedQuestion): Question {
  return {
    name: question.title,
    title: question.titleSlug,
    difficulty: question.difficulty,
    id: Number(question.questionId),
    link: `/${question.path}`,
    origin: question.origin,
    tag: question.tag as Tag,
    tags: question.tags,
    category: question.category,
  }
}
