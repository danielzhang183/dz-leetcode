import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/structures/linked-list/707'

describe('fn', () => {
  it('exported', () => {
    expect(fn(['MyLinkedList', 'addAtHead', 'addAtTail', 'addAtIndex', 'get', 'deleteAtIndex', 'get'])).toBe([[], [1], [3], [1, 2], [1], [1], [1]])
  })
})
