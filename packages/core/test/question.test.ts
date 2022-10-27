import { describe, expect, it } from 'vitest'
import type { FilterOptions } from '../src'
import { getCategoryMaps, getQuestionById, getQuestionsByFilter } from '../src'
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

  it('tags', async () => {
    expect((await getCategoryMaps()).slice(0, 1)).toMatchInlineSnapshot(`
      [
        {
          "name": "Fundamentals",
          "nameTranslated": "基本",
          "questionNum": 2793,
          "tagMap": [
            {
              "questionNum": 1412,
              "tag": {
                "id": "540",
                "name": "Array",
                "nameTranslated": "数组",
                "slug": "array",
              },
            },
            {
              "questionNum": 654,
              "tag": {
                "id": "557",
                "name": "String",
                "nameTranslated": "字符串",
                "slug": "string",
              },
            },
            {
              "questionNum": 313,
              "tag": {
                "id": "42959",
                "name": "Sorting",
                "nameTranslated": "排序",
                "slug": "sorting",
              },
            },
            {
              "questionNum": 212,
              "tag": {
                "id": "27408",
                "name": "Matrix",
                "nameTranslated": "矩阵",
                "slug": "matrix",
              },
            },
            {
              "questionNum": 115,
              "tag": {
                "id": "57876",
                "name": "Simulation",
                "nameTranslated": "模拟",
                "slug": "simulation",
              },
            },
            {
              "questionNum": 49,
              "tag": {
                "id": "14474",
                "name": "Enumeration",
                "nameTranslated": "枚举",
                "slug": "enumeration",
              },
            },
            {
              "questionNum": 21,
              "tag": {
                "id": "44460",
                "name": "String Matching",
                "nameTranslated": "字符串匹配",
                "slug": "string-matching",
              },
            },
            {
              "questionNum": 8,
              "tag": {
                "id": "6579",
                "name": "Bucket Sort",
                "nameTranslated": "桶排序",
                "slug": "bucket-sort",
              },
            },
            {
              "questionNum": 6,
              "tag": {
                "id": "9957",
                "name": "Counting Sort",
                "nameTranslated": "计数排序",
                "slug": "counting-sort",
              },
            },
            {
              "questionNum": 3,
              "tag": {
                "id": "37717",
                "name": "Radix Sort",
                "nameTranslated": "基数排序",
                "slug": "radix-sort",
              },
            },
          ],
        },
      ]
    `)
  })
})
