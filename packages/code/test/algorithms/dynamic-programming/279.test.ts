import { describe, expect, it } from 'vitest'
import { numSquares } from '../../../src/algorithms/dynamic-programming/279'

describe('numSquares', () => {
  it('exported', () => {
    expect(numSquares(12)).toBe(13)
  })
})
