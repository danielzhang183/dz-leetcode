import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from '../../../src/interview/small/002'
import { createLinkedList, toLinkedListString } from '../../../src/utils/linkedList'

describe('addTwoNumbers', () => {
  it('exported', () => {
    expect(toLinkedListString(addTwoNumbers(
      createLinkedList([2, 4, 3]),
      createLinkedList([5, 6, 4]),
    )))
      .toStrictEqual([7, 0, 8])

    expect(toLinkedListString(addTwoNumbers(
      createLinkedList([0]),
      createLinkedList([0]),
    )))
      .toStrictEqual([0])

    expect(toLinkedListString(addTwoNumbers(
      createLinkedList([9, 9, 9, 9, 9, 9, 9]),
      createLinkedList([9, 9, 9, 9]),
    )))
      .toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1])
  })
})
