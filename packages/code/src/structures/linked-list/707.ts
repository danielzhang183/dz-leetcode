import { ListNode } from '../../utils/types'

// use a singly linked list
export class MyLinkedList1 {
  constructor(
    private head: ListNode | null = null,
    private size = 0,
  ) {}

  getNode(index: number): ListNode {
    let curr: ListNode = new ListNode(0, this.head)
    while (index-- >= 0)
      curr = curr.next!

    return curr
  }

  get(index: number): number {
    if (index < 0 || index >= this.size)
      return -1
    return this.getNode(index).val
  }

  addAtHead(val: number): void {
    const node = new ListNode(val)
    node.next = this.head
    this.head = node
    this.size++
  }

  addAtTail(val: number): void {
    const node = new ListNode(val)
    if (this.head == null) {
      this.head = node
    }
    else {
      let curr: ListNode | null = this.head
      while (curr?.next)
        curr = curr.next

      curr!.next = node
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size)
      return

    if (index === 0) {
      this.addAtHead(val)
    }
    else if (index === this.size) {
      this.addAtTail(val)
    }
    else {
      const node = this.getNode(index - 1)
      node!.next = new ListNode(val, node!.next)
      this.size++
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size)
      return

    if (index === 0) {
      this.head = this.head?.next || null
    }
    else {
      const node = this.getNode(index - 1)
      node!.next = node!.next?.next || null
    }

    this.size--
  }

  toString() {
    let curr = this.head
    const str: number[] = []

    while (curr) {
      str.push(curr.val)
      curr = curr.next
    }

    return str.join('->')
  }
}

// use doubly linked list
export class MyLinkedList {
  constructor(
    private head: ListNode | null = null,
    private tail: ListNode | null = null,
    private size = 0,
  ) {}

  getNode(index: number): ListNode {
    let curr: ListNode = new ListNode(0, this.head)
    while (index-- >= 0)
      curr = curr.next!

    return curr
  }

  get(index: number): number {
    if (index < 0 || index >= this.size)
      return -1
    return this.getNode(index).val
  }

  addAtHead(val: number): void {
    const node = new ListNode(val, this.head)
    this.head = node
    if (!this.tail)
      this.tail = node
    this.size++
  }

  addAtTail(val: number): void {
    const node = new ListNode(val)
    if (this.tail) {
      // 更新尾结点
      this.tail.next = node
      this.tail = node
    }
    else {
      this.tail = node
      this.head = node
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size)
      return

    if (index <= 0) {
      this.addAtHead(val)
    }
    else if (index === this.size) {
      this.addAtTail(val)
    }
    else {
      const node = this.getNode(index - 1)
      node!.next = new ListNode(val, node!.next)
      this.size++
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size)
      return

    if (index === 0) {
      this.head = this.head?.next || null
    }
    else {
      const node = this.getNode(index - 1)
      node!.next = node!.next?.next || null
      if (index === this.size - 1)
        this.tail = node
    }

    this.size--
  }

  toString() {
    let curr = this.head
    const str: number[] = []

    while (curr) {
      str.push(curr.val)
      curr = curr.next
    }

    return str.join('->')
  }
}
