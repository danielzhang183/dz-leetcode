import { getQuestion, normalizeRawQuestion, normalizeResolvedQuestion } from '../scripts'

export const questionName = 'two-sum'

export const rawQuestion = await getQuestion(questionName)
export const resolvedQuestion = normalizeRawQuestion(rawQuestion)
export const question = normalizeResolvedQuestion(resolvedQuestion)
