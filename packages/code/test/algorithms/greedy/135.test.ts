import { describe, expect, it } from 'vitest'
import { candy } from '../../../src/algorithms/greedy/135'

describe('candy', () => {
  it('exported', () => {
    expect(candy([1, 0, 2])).toBe(5)
    expect(candy([1, 2, 2])).toBe(4)
    expect(candy([1, 2, 2, 5, 4, 3, 2])).toBe(14)
  })
})
