import { describe, expect, it } from 'vitest'
import { generate } from '../scripts/generate'

describe('gen', () => {
  it('markdown', async () => {
    const file = './packages/docs/data/questions.yml'
    const questions = await generate(file, {})
    expect(questions).toMatchInlineSnapshot('undefined')
  })
})
