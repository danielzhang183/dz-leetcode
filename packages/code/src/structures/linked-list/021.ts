/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import type { ListNode } from '../types'

// recursive
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 == null) {
    return list2
  }
  else if (list2 == null) {
    return list1
  }
  else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
  else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}
