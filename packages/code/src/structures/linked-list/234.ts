import type { ListNode } from './../../utils/types'

export function isPalindrome1(head: ListNode | null): boolean {
  const middleNode = (head: ListNode): ListNode => {
    let fast: ListNode | null = head
    let slow: ListNode = head
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow!.next!
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

  if (head == null)
    return true

  // find first half end node
  const firstHalfEnd = middleNode(head)
  // reverse second half node
  const secondHalfStart = reverseList(firstHalfEnd)

  // check is palindrome
  let p1 = head
  let p2 = secondHalfStart
  while (p2 != null) {
    if (p1.val !== p2.val)
      return false
    p1 = p1.next!
    p2 = p2.next!
  }

  return true
}

export function isPalindrome(head: ListNode | null): boolean {
  let frontNode: ListNode | null = head
  const dfs = (currentNode: ListNode | null): boolean => {
    if (currentNode != null) {
      if (!dfs(currentNode.next))
        return false
      if (currentNode.val !== frontNode!.val)
        return false

      frontNode = frontNode!.next
    }

    return true
  }

  return dfs(head)
}
