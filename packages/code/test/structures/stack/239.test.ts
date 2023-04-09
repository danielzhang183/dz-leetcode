import { describe, expect, it } from 'vitest'
import { maxSlidingWindow } from '../../../src/structures/stack/239'

describe('maxSlidingWindow', () => {
  it('exported', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7])
    expect(maxSlidingWindow([1], 1)).toStrictEqual([1])
  })
})
