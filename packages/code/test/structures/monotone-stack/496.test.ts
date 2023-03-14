import { describe, expect, it } from 'vitest'
import { nextGreaterElement } from '../../../src/structures/monotone-stack/496'

describe('nextGreaterElement', () => {
  it('exported', () => {
    expect(nextGreaterElement([4, 1, 2])).toBe([1, 3, 4, 2])
    expect(nextGreaterElement([2, 4])).toBe([1, 2, 3, 4])
  })
})
