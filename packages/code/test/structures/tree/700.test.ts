import { describe, expect, it } from 'vitest'
import { searchBST } from '../../../src/structures/tree/700'

describe('searchBST', () => {
  it('exported', () => {
    expect(searchBST([4, 2, 7, 1, 3])).toBe(2)
    expect(searchBST([4, 2, 7, 1, 3])).toBe(5)
  })
})
