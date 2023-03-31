import { ListNode } from '../../utils/types'

// merge sort
export function sortList(head: ListNode | null): ListNode | null {
  if (head == null)
    return head

  // count list lenght
  let len = 0
  let curr: ListNode | null = head
  while (curr != null) {
    curr = curr.next
    len++
  }

  // init dump head
  const dump = new ListNode(-1, head)

  for (let subLen = 1; subLen < len; subLen <<= 1) {
    let prev: ListNode | null = dump
    let curr: ListNode | null = dump.next

    while (curr != null) {
      // splite two list with same `subLen` length
      const l1 = curr
      for (let i = 1; i < subLen && curr != null && curr.next != null; i++)
        curr = curr.next

      const l2 = curr.next
      curr.next = null
      curr = l2
      for (let i = 1; i < subLen && curr != null && curr.next != null; i++)
        curr = curr.next

      let next: ListNode | null = null
      if (curr != null) {
        next = curr.next
        curr.next = null
      }

      const merged = mergeTwoList(l1, l2)
      prev.next = merged
      while (prev?.next != null)
        prev = prev.next
      curr = next
    }
  }

  return dump.next
}

function mergeTwoList(head1: ListNode | null, head2: ListNode | null): ListNode | null {
  const dump = new ListNode(-1)
  let curr = dump
  let l1 = head1
  let l2 = head2

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      curr.next = l1
      l1 = l1.next
    }
    else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  if (l1 != null)
    curr.next = l1
  else if (l2 != null)
    curr.next = l2

  return dump.next
}
