import { ListNode } from '../../utils/types'

// recursive
// export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   if (list1 == null) {
//     return list2
//   }
//   else if (list2 == null) {
//     return list1
//   }
//   else if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2)
//     return list1
//   }
//   else {
//     list2.next = mergeTwoLists(list1, list2.next)
//     return list2
//   }
// }

// traverse
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const prehead = new ListNode(-1)

  let curr = prehead
  while (list1 != null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1
      list1 = list1.next
    }
    else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next
  }

  curr.next = list1 == null ? list2 : list1

  return prehead.next
}
