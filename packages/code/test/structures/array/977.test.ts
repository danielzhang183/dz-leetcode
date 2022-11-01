import { describe, expect, it } from 'vitest'
import { sortedSquares } from '../../../src/structures/array/977'

describe('sortedSquares', () => {
  it('exported', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toBe([-7, -3, 2, 3, 11])
  })
})
