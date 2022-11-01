import { describe, expect, it } from 'vitest'
import { largestValues } from '../../../src/structures/tree/515'

describe('largestValues', () => {
  it('exported', () => {
    expect(largestValues([1, 3, 2, 5, 3, null, 9])).toBe([1, 2, 3])
  })
})
