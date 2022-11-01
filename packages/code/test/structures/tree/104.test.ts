import { describe, expect, it } from 'vitest'
import { maxDepth } from '../../../src/structures/tree/104'

describe('maxDepth', () => {
  it('exported', () => {
    expect(maxDepth([3, 9, 20, null, null, 15, 7])).toBe([1, null, 2])
  })
})
