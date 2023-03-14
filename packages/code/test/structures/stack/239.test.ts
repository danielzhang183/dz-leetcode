import { describe, expect, it } from 'vitest'
import { maxSlidingWindow } from '../../../src/structures/stack/239'

describe('maxSlidingWindow', () => {
  it('exported', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7])).toBe(3)
    expect(maxSlidingWindow([1])).toBe(1)
  })
})
