import { describe, expect, it } from 'vitest'
import { removeNthFromEnd } from '../../../src/structures/linked-list/019'
import { createLinkedList, toLinkedListString } from '../../../src/utils'
import type { ListNode } from '../../../src/utils/types'

describe('removeNthFromEnd', () => {
  let ll: ListNode | null

  it('exported', () => {
    ll = createLinkedList([1, 2, 3, 4, 5])
    expect(toLinkedListString(removeNthFromEnd(ll, 2))).toStrictEqual([1, 2, 3, 5])
    ll = createLinkedList([1])
    expect(toLinkedListString(removeNthFromEnd(ll, 1))).toStrictEqual([])
    ll = createLinkedList([1, 2])
    expect(toLinkedListString(removeNthFromEnd(ll, 1))).toStrictEqual([1])
  })
})
