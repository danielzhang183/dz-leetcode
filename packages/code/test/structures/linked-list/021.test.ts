import { describe, expect, it } from 'vitest'
import { mergeTwoLists } from '../../../src/structures/linked-list/021'
import { createLinkedList, toLinkedListString } from '../../../src/utils'

describe('mergeTwoLists', () => {
  it('two not null listnode', () => {
    const ll1 = createLinkedList([1, 2, 4])
    const ll2 = createLinkedList([1, 3, 4])
    expect(toLinkedListString(mergeTwoLists(ll1, ll2))).toStrictEqual([1, 1, 2, 3, 4, 4])
  })

  it('two null listnode', () => {
    const ll1 = createLinkedList([])
    const ll2 = createLinkedList([])
    expect(toLinkedListString(mergeTwoLists(ll1, ll2))).toStrictEqual([])
  })

  it('one of two is null listnode', () => {
    const ll1 = createLinkedList([])
    const ll2 = createLinkedList([0])
    expect(toLinkedListString(mergeTwoLists(ll1, ll2))).toStrictEqual([0])
  })
})
