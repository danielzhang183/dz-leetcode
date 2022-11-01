import { describe, expect, it } from 'vitest'
import { removeElements } from '../../../src/structures/linked-list/203'

describe('removeElements', () => {
  it('exported', () => {
    expect(removeElements([1, 2, 6, 3, 4, 5, 6])).toBe(6)
    expect(removeElements([])).toBe(1)
    expect(removeElements([7, 7, 7, 7])).toBe(7)
  })
})
