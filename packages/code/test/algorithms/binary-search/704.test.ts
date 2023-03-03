import { describe, expect, it } from 'vitest'
import { search } from '../../../src/algorithms/binary-search/704'

describe('search', () => {
  it('exported', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })
})
