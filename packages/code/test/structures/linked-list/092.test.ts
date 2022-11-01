import { describe, expect, it } from 'vitest'
import { reverseBetween } from '../../../src/structures/linked-list/092'

describe('reverseBetween', () => {
  it('exported', () => {
    expect(reverseBetween([1, 2, 3, 4, 5])).toBe(2)
    expect(reverseBetween(4)).toBe([5])
    expect(reverseBetween(1)).toBe(1)
  })
})
