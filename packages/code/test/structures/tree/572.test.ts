import { describe, expect, it } from 'vitest'
import { isSubtree } from '../../../src/structures/tree/572'

describe('isSubtree', () => {
  it('exported', () => {
    expect(isSubtree([3, 4, 5, 1, 2])).toBe([4, 1, 2])
    expect(isSubtree([3, 4, 5, 1, 2, null, null, null, null, 0])).toBe([4, 1, 2])
  })
})
