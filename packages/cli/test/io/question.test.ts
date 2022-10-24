import { describe, expect, it } from 'vitest'
import { loadQuestions } from '../fixtures'

const questions = await loadQuestions()

export interface UnresolvedUsage {
  category: string
  tagMap: Record<string, (string | number)[]>
}

describe('questions', () => {
  it('load questions', async () => {
    expect(questions).toMatchSnapshot('loadedQuestions')
  })

  it('no', async () => {
    const categories: Record<string, Record<string, (string | number)[]>> = {}

    for (const question of questions!) {
      const {
        category = 'unknown-category',
        tag = 'unknown-tag',
        questions,
      } = question
      if (!categories[category])
        categories[category] = {}
      if (!categories[category][tag])
        categories[category][tag] = []

      categories[category][tag].push(...questions)
    }

    expect(categories).toMatchInlineSnapshot(`
      {
        "algorithms": {
          "binary-search": [
            35,
            69,
            153,
          ],
          "sort": [
            15,
            912,
          ],
        },
        "structures": {
          "array": [
            1,
            26,
            27,
          ],
          "linked-list": [
            19,
            21,
            141,
          ],
        },
      }
    `)

    const usages: UnresolvedUsage[] = Object.entries(categories)
      // only check deps with more then 1 version in use
      .filter(i => Object.keys(i[1]).length > 1)
      // sort by the number of versions
      .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
      .map(([category, tagMap]) => ({ category, tagMap }))

    expect(usages).toMatchInlineSnapshot(`
      [
        {
          "category": "structures",
          "tagMap": {
            "array": [
              1,
              26,
              27,
            ],
            "linked-list": [
              19,
              21,
              141,
            ],
          },
        },
        {
          "category": "algorithms",
          "tagMap": {
            "binary-search": [
              35,
              69,
              153,
            ],
            "sort": [
              15,
              912,
            ],
          },
        },
      ]
    `)
  })
})
