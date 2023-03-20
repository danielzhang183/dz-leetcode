import type { ListNode } from '../../utils/types'

export function reorderList(head: ListNode | null): void {
  const middleNode = (head: ListNode): ListNode => {
    let fast: ListNode | null = head
    let slow = head
    while (fast && fast.next) {
      slow = slow!.next!
      fast = fast.next.next
    }

    return slow
  }

  const reverseList = (head: ListNode): ListNode => {
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    while (curr) {
      const tmp = curr.next
      curr.next = prev
      prev = curr
      curr = tmp
    }

    return prev!
  }

  if (head === null || head.next === null)
    return
  let head1: ListNode | null = head
  const secondHalfStart = middleNode(head)
  let head2: ListNode | null = reverseList(secondHalfStart.next!)
  // important: splite linked list
  secondHalfStart.next = null
  // head1: [1, 2, 3]
  // head2: [5, 4]
  // result:[1, 5, 2, 4, 3]
  while (head2 != null) {
    const tmp1: ListNode | null = head1!.next
    const tmp2: ListNode | null = head2.next
    head1!.next = head2
    head2.next = tmp1
    head1 = tmp1
    head2 = tmp2
  }
}
