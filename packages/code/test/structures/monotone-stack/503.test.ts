import { describe, expect, it } from 'vitest'
import { nextGreaterElements } from '../../../src/structures/monotone-stack/503'

describe('nextGreaterElements', () => {
  it('exported', () => {
    expect(nextGreaterElements([1, 2, 1])).toBe([1, 2, 3, 4, 3])
  })
})
