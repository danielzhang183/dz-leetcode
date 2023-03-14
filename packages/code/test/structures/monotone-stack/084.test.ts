import { describe, expect, it } from 'vitest'
import { largestRectangleArea } from '../../../src/structures/monotone-stack/084'

describe('largestRectangleArea', () => {
  it('exported', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe([2, 4])
  })
})
