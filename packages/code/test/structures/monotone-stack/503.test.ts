import { describe, expect, it } from 'vitest'
import { nextGreaterElements } from '../../../src/structures/monotone-stack/503'

describe('nextGreaterElements', () => {
  it('exported', () => {
    expect(nextGreaterElements([1, 2, 1])).toStrictEqual([2, -1, 2])
    expect(nextGreaterElements([1, 2, 3, 4, 3])).toStrictEqual([2, 3, 4, -1, 4])
  })
})
