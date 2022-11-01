import { describe, expect, it } from 'vitest'
import { reverseList } from '../../../src/structures/linked-list/206'

describe('reverseList', () => {
  it('exported', () => {
    expect(reverseList([1, 2, 3, 4, 5])).toBe([1, 2])
  })
})
