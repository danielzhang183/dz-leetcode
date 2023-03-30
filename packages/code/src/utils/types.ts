export class ListNode<T = number> {
  val: T
  next: ListNode<T> | null

  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = (val === undefined ? 0 : val) as T
    this.next = (next === undefined ? null : next)
  }
}

export class LinkedList<T = number> {
  #head: ListNode<T> | null = null
  #size = 0

  constructor(value?: T | T[]) {
    this.clear()

    if (Array.isArray(value))
      value.forEach(val => this.add(val))
    else
      value ? this.add(value) : this.add(0 as T)
  }

  add(value: T) {
    const node = new ListNode<T>(value)

    if (this.#head) {
      let curr = this.#head
      while (curr.next)
        curr = curr.next
      curr.next = node
    }
    else {
      this.#head = node
    }

    this.#size++
  }

  // insert element at the position index of the list
  insertAt(value: T | ListNode<T>, index: number) {
    if (index < 0 || index > this.#size)
      throw new Error('invalid index')

    const node = value instanceof ListNode ? value : new ListNode<T>(value)

    if (index === 0) {
      node.next = this.#head
      this.#head = node
    }
    else {
      let curr = this.#head
      let prev: ListNode<T> | null
      let counter = 0

      while (counter++ < index) {
        prev = curr
        curr = curr!.next
      }
      node.next = curr
      prev!.next = node
    }

    this.#size++
  }

  isEmpty() {
    return this.#size === 0
  }

  clear() {
    this.#head = null
    this.#size = 0
  }

  get size() {
    return this.#size
  }

  get val() {
    return this.#head
  }

  *[Symbol.iterator]() {
    let curr = this.#head

    while (curr) {
      yield curr.val
      curr = curr.next
    }
  }

  toString() {
    let curr = this.#head
    const str: (T | 0)[] = []

    while (curr) {
      str.push(curr.val)
      curr = curr.next
    }

    return str.join('->')
  }
}
