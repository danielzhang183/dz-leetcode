import { join } from 'path'
import { $fetch } from 'ohmyfetch'
import { hyphenate, pad } from './utils'
import type { RawQuestion, ResolvedQuestion } from './types'
import type { Category, Tag } from '~/types'

const LEETCODE_FETCH_URL = 'https://leetcode.cn/graphql/'
export const LEETCODE_QUESTION_URL = 'https://leetcode.cn/problems'

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
  tag: Tag,
  questionId: string | number,
  ext?: '.md' | '.ts' | '.test.ts' | '.yml' | '.yaml' | '.json',
) => join(
  hyphenate(category),
  hyphenate(tag),
  `${pad(questionId)}${ext ?? ''}`,
)

export const getQuestionOrigin = (titleSlug: string) => `${LEETCODE_QUESTION_URL}/${titleSlug}`

export function normalizeQuestion(
  rawQuestion: RawQuestion,
  category?: Category,
  tag?: Tag,
): ResolvedQuestion {
  function normalizeTestCases(exampleTestcases: string): Array<{
    expect: string
    toBe: string
  }> {
    const res = []
    const testcases = exampleTestcases.split('\n')
    for (let i = 0; i < testcases.length - 1; i += 2)
      res.push({ expect: testcases[i], toBe: testcases[i + 1] })

    return res
  }

  function normalizeCode(codeSnippets): string {
    return codeSnippets.find(i => i.lang === 'TypeScript')?.code || ''
  }

  return {
    questionId: rawQuestion.questionId,
    category: category ?? hyphenate(rawQuestion.categoryTitle),
    tag,
    title: rawQuestion.title,
    titleSlug: rawQuestion.titleSlug,
    content: rawQuestion.content,
    difficulty: rawQuestion.difficulty,
    testcases: normalizeTestCases(rawQuestion.exampleTestcases),
    code: normalizeCode(rawQuestion.codeSnippets),
    functionName: 'string',
  }
}
