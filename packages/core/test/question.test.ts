import { describe, expect, it } from 'vitest'

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
})
