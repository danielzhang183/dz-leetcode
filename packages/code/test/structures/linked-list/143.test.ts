import { describe, expect, it } from 'vitest'
import { reorderList } from '../../../src/structures/linked-list/143'
import { createLinkedList, toLinkedListString } from '../../../src/utils/linkedList'

describe('reorderList', () => {
  it('exported', () => {
    const ll = createLinkedList([1, 2, 3, 4])
    reorderList(ll)
    expect(toLinkedListString(ll)).toStrictEqual([1, 4, 2, 3])
    const ll1 = createLinkedList([1, 2, 3, 4, 5])
    reorderList(ll1)
    expect(toLinkedListString(ll1)).toStrictEqual([1, 5, 2, 4, 3])
  })
})
