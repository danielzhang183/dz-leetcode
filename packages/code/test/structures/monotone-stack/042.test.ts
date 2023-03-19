import { describe, expect, it } from 'vitest'
import { trap } from '../../../src/structures/monotone-stack/042'

describe('trap', () => {
  it('exported', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
  })
})
