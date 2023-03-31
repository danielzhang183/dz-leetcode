import { describe, expect, it } from 'vitest'
import { sortList } from '../../../src/interview/tencent/148'
import { createLinkedList, toLinkedListString } from '../../../src/utils/linkedList'

describe('sortList', () => {
  it('exported', () => {
    expect(toLinkedListString(sortList(createLinkedList([4, 2, 1, 3]))))
      .toStrictEqual([1, 2, 3, 4])
    expect(toLinkedListString(sortList(createLinkedList([-1, 5, 3, 4, 0]))))
      .toStrictEqual([-1, 0, 3, 4, 5])
    expect(toLinkedListString(sortList(createLinkedList([]))))
      .toStrictEqual([])
  })
})
