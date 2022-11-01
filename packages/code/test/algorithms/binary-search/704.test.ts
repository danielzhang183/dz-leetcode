import { describe, expect, it } from 'vitest'
import { search } from '../../../src/algorithms/binary-search/704'

describe('search', () => {
  it('exported', () => {
    expect(search([-1, 0, 3, 5, 9, 12])).toBe(9)
    expect(search([-1, 0, 3, 5, 9, 12])).toBe(2)
  })
})
