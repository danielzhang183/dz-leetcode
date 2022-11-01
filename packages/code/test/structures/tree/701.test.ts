import { describe, expect, it } from 'vitest'
import { insertIntoBST } from '../../../src/structures/tree/701'

describe('insertIntoBST', () => {
  it('exported', () => {
    expect(insertIntoBST([4, 2, 7, 1, 3])).toBe(5)
    expect(insertIntoBST([40, 20, 60, 10, 30, 50, 70])).toBe(25)
    expect(insertIntoBST([4, 2, 7, 1, 3, null, null, null, null, null, null])).toBe(5)
  })
})
