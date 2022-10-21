import { getQuestionByTitle, normalizeRawQuestion, normalizeResolvedQuestion } from '../src'

export const questionName = 'two-sum'

export const rawQuestion = await getQuestionByTitle(questionName)
export const resolvedQuestion = normalizeRawQuestion(rawQuestion!)
export const question = normalizeResolvedQuestion(resolvedQuestion)
