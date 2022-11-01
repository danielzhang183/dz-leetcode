import { describe, expect, it } from 'vitest'
import { mergeTwoLists } from '../../../src/structures/linked-list/021'

describe('mergeTwoLists', () => {
  it('exported', () => {
    expect(mergeTwoLists([1, 2, 4])).toBe([1, 3, 4])
    expect(mergeTwoLists([])).toBe([])
    expect(mergeTwoLists([])).toBe([0])
  })
})
