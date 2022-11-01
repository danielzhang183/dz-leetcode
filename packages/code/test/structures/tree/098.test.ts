import { describe, expect, it } from 'vitest'
import { isValidBST } from '../../../src/structures/tree/098'

describe('isValidBST', () => {
  it('exported', () => {
    expect(isValidBST([2, 1, 3])).toBe([5, 1, 4, null, null, 3, 6])
  })
})
