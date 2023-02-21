import { describe, expect, it } from 'vitest'
import { mergeTwoLists } from '../../../src/structures/linked-list/021'
import { createLinkedList } from '../../../src/structures/types'

describe('mergeTwoLists', () => {
  it('exported', () => {
    expect(createLinkedList([1, 2, 4])).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": null,
          "val": 4,
        },
        "val": 2,
      }
    `)
    // expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toBe([1, 1, 2, 3, 4, 4])
    // expect(mergeTwoLists([], [])).toBe([])
    // expect(mergeTwoLists([], [0])).toBe([0])
  })
})
