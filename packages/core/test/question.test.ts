import { describe, expect, it } from 'vitest'
import { getQuestionById } from '../src'
import { question, rawQuestion, resolvedQuestion } from './fixture'

describe('question', () => {
  it('rawQuestion', async () => {
    expect(rawQuestion).toMatchSnapshot('rawQuestion')
  })

  it('resolvedQuestion', () => {
    expect(resolvedQuestion).toMatchSnapshot('resolvedQuestion')
  })

  it('question', () => {
    expect(question).toMatchSnapshot('question')
  })

  it('get question by id', async () => {
    expect(await getQuestionById(1)).toStrictEqual(rawQuestion)
  })
})
