import { describe, expect, it } from 'vitest'
import { sortedListToBST } from '../../../src/structures/tree/109'

describe('sortedListToBST', () => {
  it('exported', () => {
    expect(sortedListToBST([-10, -3, 0, 5, 9])).toBe([])
  })
})
