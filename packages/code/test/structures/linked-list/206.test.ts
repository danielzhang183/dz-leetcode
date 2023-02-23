import { describe, expect, it } from 'vitest'
import { reverseList } from '../../../src/structures/linked-list/206'
import { createLinkedList, toLinkedListString } from '../../../src/utils'

describe('reverseList', () => {
  it('exported', () => {
    const ll1 = createLinkedList([1, 2, 3, 4, 5])
    expect(toLinkedListString(reverseList(ll1))).toStrictEqual([5, 4, 3, 2, 1])
    // const ll2 = createLinkedList([1, 2])
    // expect(toLinkedListString(reverseList(ll2))).toStrictEqual([2, 1])
    // const ll3 = createLinkedList([])
    // expect(toLinkedListString(reverseList(ll3))).toStrictEqual([])
  })
})
