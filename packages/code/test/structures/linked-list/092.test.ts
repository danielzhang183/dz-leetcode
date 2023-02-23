import { describe, expect, it } from 'vitest'
import { reverseBetween } from '../../../src/structures/linked-list/092'
import { createLinkedList, toLinkedListString } from '../../../src/utils'

describe('reverseBetween', () => {
  it('exported', () => {
    const ll1 = createLinkedList([1, 2, 3, 4, 5])
    expect(toLinkedListString(reverseBetween(ll1, 2, 4))).toStrictEqual([1, 4, 3, 2, 5])
    const ll2 = createLinkedList([5])
    expect(toLinkedListString(reverseBetween(ll2, 1, 1))).toStrictEqual([5])
  })
})
