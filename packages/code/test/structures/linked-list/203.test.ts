import { describe, expect, it } from 'vitest'
import { removeElements } from '../../../src/structures/linked-list/203'
import { createLinkedList, toLinkedListString } from '../../../src/utils'

describe('removeElements', () => {
  it('exported', () => {
    const ll1 = createLinkedList([1, 2, 6, 3, 4, 5, 6])
    expect(toLinkedListString(removeElements(ll1, 6))).toStrictEqual([1, 2, 3, 4, 5])
    const ll2 = createLinkedList([])
    expect(toLinkedListString(removeElements(ll2, 1))).toStrictEqual([])
    const ll3 = createLinkedList([7, 7, 7, 7])
    expect(toLinkedListString(removeElements(ll3, 7))).toStrictEqual([])
  })
})
