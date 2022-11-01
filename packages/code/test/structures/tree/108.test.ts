import { describe, expect, it } from 'vitest'
import { sortedArrayToBST } from '../../../src/structures/tree/108'

describe('sortedArrayToBST', () => {
  it('exported', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toBe([1, 3])
  })
})
