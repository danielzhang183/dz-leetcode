import { describe, expect, it } from 'vitest'
import { detectCycle } from '../../../src/structures/linked-list/142'

describe('detectCycle', () => {
  it('exported', () => {
    expect(detectCycle([3, 2, 0, -4])).toBe(1)
    expect(detectCycle([1, 2])).toBe(0)
    expect(detectCycle([1])).toBe(-1)
  })
})
