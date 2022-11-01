import { describe, expect, it } from 'vitest'
import { stoneGame } from '../../../src/algorithms/math/877'

describe('stoneGame', () => {
  it('exported', () => {
    expect(stoneGame([5, 3, 4, 5])).toBe([3, 7, 2, 3])
  })
})
