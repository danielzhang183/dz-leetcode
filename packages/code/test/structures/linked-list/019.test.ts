import { describe, expect, it } from 'vitest'
import { removeNthFromEnd } from '../../../src/structures/linked-list/019'

describe('removeNthFromEnd', () => {
  it('exported', () => {
    expect(removeNthFromEnd([1, 2, 3, 4, 5])).toBe(2)
    expect(removeNthFromEnd([1])).toBe(1)
    expect(removeNthFromEnd([1, 2])).toBe(1)
  })
})
