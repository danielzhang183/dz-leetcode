import { describe, expect, it } from 'vitest'
import { hasCycle } from '../../../src/structures/linked-list/141'

describe('hasCycle', () => {
  it('exported', () => {
    expect(hasCycle([3, 2, 0, -4])).toBe(1)
    expect(hasCycle([1, 2])).toBe(0)
    expect(hasCycle([1])).toBe(-1)
  })
})
