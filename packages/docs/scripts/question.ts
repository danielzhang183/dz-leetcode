import { join } from 'path'
import { $fetch } from 'ohmyfetch'
import type { RawQuestion } from './types'
import { hyphenate, pad } from './utils'
import type { Tag } from '~/types'

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

export const getQuestionOrigin = (titleSlug: string) => LEETCODE_QUESTION_URL + titleSlug
