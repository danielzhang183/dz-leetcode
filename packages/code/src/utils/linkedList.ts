import type { ListNode } from './types'
import { LinkedList } from './types'

export function createLinkedList<T = number>(val?: T | T[]): ListNode<T> {
  const linkedList = new LinkedList<T>(val)
  return linkedList.val!
}

export function createCycleLinkedList<T = number>(val?: T | T[], pos?: number): ListNode<T> {
  const prehead = new LinkedList<T>(val).val

  if (pos === undefined || pos < 0)
    return prehead!

  let curr = prehead
  let cycle = null
  let count = 0
  while (curr?.next != null) {
    if (count++ === pos)
      cycle = curr
    curr = curr.next
  }
  curr!.next = cycle

  return prehead!
}

export function toLinkedListString<T = number>(val?: ListNode<T> | null): T[] {
  let curr = val || null
  const ret: (T | 0)[] = []

  while (curr) {
    ret.push(curr.val)
    curr = curr.next
  }

  return ret as T[]
}
