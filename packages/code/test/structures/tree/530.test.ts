import { describe, expect, it } from 'vitest'
import { getMinimumDifference } from '../../../src/structures/tree/530'

describe('getMinimumDifference', () => {
  it('exported', () => {
    expect(getMinimumDifference([4, 2, 6, 1, 3])).toBe([1, 0, 48, null, null, 12, 49])
  })
})
