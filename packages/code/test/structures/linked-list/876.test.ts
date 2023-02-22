import { describe, expect, it } from 'vitest'
import { middleNode } from '../../../src/structures/linked-list/876'
import { createLinkedList, toLinkedListString } from '../../../src/utils'

describe('middleNode', () => {
  it('exported', () => {
    const ll1 = createLinkedList([1, 2, 3, 4, 5])
    expect(toLinkedListString(middleNode(ll1))).toStrictEqual([3, 4, 5])
    const ll2 = createLinkedList([1, 2, 3, 4, 5, 6])
    expect(toLinkedListString(middleNode(ll2))).toStrictEqual([4, 5, 6])
  })
})
