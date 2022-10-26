import { describe, expect, it } from 'vitest'
import type { FilterOptions } from '../src'
import { getQuestionById, getQuestionsByFilter } from '../src'
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

describe('get questions by filter', () => {
  const makeOptions = (category?: string, tag?: string, difficulty?: string): FilterOptions => {
    const options: FilterOptions = {}
    if (category)
      options.category = category
    if (tag)
      options.tag = tag
    if (difficulty)
      options.difficulty = difficulty.toUpperCase()

    return options
  }

  it('with category', async () => {
    expect(await (await getQuestionsByFilter(makeOptions('binary-search'))).slice(0, 4)).toMatchInlineSnapshot(`
      [
        {
          "difficulty": "MEDIUM",
          "questionId": "1901",
          "titleSlug": "find-a-peak-element-ii",
        },
        {
          "difficulty": "MEDIUM",
          "questionId": "1898",
          "titleSlug": "maximum-number-of-removable-characters",
        },
        {
          "difficulty": "MEDIUM",
          "questionId": "1894",
          "titleSlug": "find-the-student-that-will-replace-the-chalk",
        },
        {
          "difficulty": "MEDIUM",
          "questionId": "1891",
          "titleSlug": "cutting-ribbons",
        },
      ]
    `)

    const result1 = await getQuestionsByFilter(makeOptions('', '', 'easy'))
    expect(result1.slice(0, 4).every(i => i.difficulty === 'EASY')).toBe(true)
  })
})
