export class ListNode<T = number> {
  val: T | 0
  next: ListNode<T> | null
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function createLinkedList<T = any>(val?: T | T[]): ListNode<T> {
  if (Array.isArray(val) && val.length) {
    let curr: ListNode<T> | undefined

    for (const node of val) {
      if (curr != null) {
        while (curr.next)
          curr = curr.next
        curr.next = new ListNode(node)
      }
      else {
        curr = new ListNode(node)
      }
      console.log({ node, curr })
    }

    return curr!
  }
  else {
    return new ListNode(val) as ListNode<T>
  }
}
