import { describe, expect, it } from 'vitest'
import { jump } from '../../../src/interview/bytedance/045'

describe('jump', () => {
  it('exported', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
  })
})
