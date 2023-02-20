import { describe, expect, it } from 'vitest'
import { removeElement } from '../../../src/structures/array/027'

describe('removeElement', () => {
  it('exported', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
    expect(removeElement([1], 1)).toBe(0)
  })
})
