import { describe, expect, it } from 'vitest'
import { swapPairs } from '../../../src/structures/linked-list/024'
import { createLinkedList, toLinkedListString } from '../../../src/utils/linkedList'

describe('swapPairs', () => {
  it('exported', () => {
    expect(toLinkedListString(swapPairs(createLinkedList([1, 2, 3, 4])))).toStrictEqual([2, 1, 4, 3])
    expect(toLinkedListString(swapPairs(createLinkedList([1])))).toStrictEqual([1])
    expect(toLinkedListString(swapPairs(createLinkedList([])))).toStrictEqual([])
  })
})
