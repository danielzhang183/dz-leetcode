import { LinkedList, ListNode } from './types'

export function createLinkedList<T = number>(val?: T | T[]): ListNode<T> {
  const linkedList = new LinkedList<T>(val)
  return linkedList.val!
}

export function createCycleLinkedList<T = number>(val?: T | T[], pos?: number): ListNode<T> {
  const prehead = new LinkedList<T>(val).val

  if (pos === undefined || pos < 0)
    return prehead!

  let curr = prehead
  let cycle: ListNode<T> | null = null
  let count = 0
  while (curr?.next != null) {
    if (count++ === pos)
      cycle = curr
    curr = curr.next
  }
  curr!.next = cycle

  return prehead!
}

export function createIntersectionLinkedList<T = number>(
  headA: T[],
  headB: T[],
  intersectVal: T,
): { headA: ListNode<T>; headB: ListNode<T> } {
  const indexA = headA.findIndex(i => i === intersectVal)
  if (indexA < 0) {
    return {
      headA: createLinkedList(headA),
      headB: createLinkedList(headB),
    }
  }

  const indexB = headB.findIndex(i => i === intersectVal)
  headA.splice(indexA, 1)
  headB.splice(indexB, 1)
  const llA = new LinkedList<T>(headA)
  const llB = new LinkedList<T>(headB)
  const intersectionNode = new ListNode(intersectVal)
  llA.insertAt(intersectionNode, indexA)
  llB.insertAt(intersectionNode, indexB)

  return { headA: llA.val!, headB: llB.val! }
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
