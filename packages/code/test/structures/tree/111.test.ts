import { describe, expect, it } from 'vitest'
import { minDepth } from '../../../src/structures/tree/111'

describe('minDepth', () => {
  it('exported', () => {
    expect(minDepth([3, 9, 20, null, null, 15, 7])).toBe([2, null, 3, null, 4, null, 5, null, 6])
  })
})
