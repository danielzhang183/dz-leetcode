import type { ListNode } from './types'
import { LinkedList } from './types'

export function createLinkedList<T = number>(val?: T | T[]): ListNode<T> {
  const linkedList = new LinkedList<T>(val)
  return linkedList.val!
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
