import { join } from 'path'
import { $fetch } from 'ohmyfetch'
import { hyphenate, pad } from './utils'
import type { Category, CodeSnippet, Question, RawQuestion, ResolvedQuestion, Tag, TestCase, TopicTag } from './types'

const LEETCODE_FETCH_URL = 'https://leetcode.cn/graphql/'
const LEETCODE_QUESTION_URL = 'https://leetcode.cn/problems'

export async function getQuestion(titleSlug: string): Promise<RawQuestion> {
  const query = [
    'query questionData($titleSlug: String!) {',
    'question(titleSlug: $titleSlug) {',
    'questionId',
    'categoryTitle',
    'title',
    'titleSlug',
    'content',
    'difficulty',
    'exampleTestcases',
    'codeSnippets {',
    'lang',
    'code',
    '}',
    'topicTags {',
    'slug',
    'translatedName',
    '}',
    '}',
    '}',
  ].join('\n')

  return await $fetch(LEETCODE_FETCH_URL, {
    method: 'post',
    body: {
      operationName: 'questionData',
      query,
      variables: { titleSlug },
    },
  }).then(r => r.data.question)
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

export function normalizeRawQuestion(
  question: RawQuestion,
  category?: Category | string | undefined,
  tag?: Tag | string | undefined,
): ResolvedQuestion {
  function normalizeTestCases(exampleTestcases: string): TestCase[] {
    const res: TestCase[] = []
    const testcases = exampleTestcases.split('\n')
    for (let i = 0; i < testcases.length - 1; i += 2)
      res.push({ expect: testcases[i], toBe: testcases[i + 1] })

    return res
  }

  function normalizeCode(codeSnippets: CodeSnippet[]): string {
    return codeSnippets.find(i => i.lang === 'TypeScript')?.code || ''
  }

  function normalizeFunctionName(code: string): string {
    const re = /function \*?(\w+)\(/
    return code?.match(re)![1] || 'fn'
  }

  function normalizeTag(tag: string | TopicTag[]): string {
    return hyphenate(Array.isArray(tag) ? tag[0].slug : tag)
  }

  const code = normalizeCode(question.codeSnippets)
  const normalizedCategory = hyphenate(category || question.categoryTitle)
  const normalizedTag = normalizeTag(tag || question.topicTags)

  return {
    questionId: question.questionId,
    category: normalizedCategory,
    tag: normalizedTag,
    title: question.title,
    titleSlug: question.titleSlug,
    content: question.content,
    difficulty: question.difficulty,
    testcases: normalizeTestCases(question.exampleTestcases),
    code,
    functionName: normalizeFunctionName(code),
    path: getQuestionPath(normalizedCategory, normalizedTag, question.questionId),
    origin: getQuestionOrigin(question.titleSlug),
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
    category: question.category,
  }
}
