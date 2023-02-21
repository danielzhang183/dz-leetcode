class Node {
  value: any
  next: Node | undefined

  constructor(value: any) {
    this.value = value
  }
}

export class LinkedList<T = any> {
  #head: Node | undefined
  #size = 0

  constructor(value: T | T[] | null) {
    this.clear()

    if (value != null) {
      if (Array.isArray(value))
        value.forEach(val => this.add(val))
      else
        this.add(value)
    }
  }

  add(value: T) {
    const node = new Node(value)

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
  insertAt(value: T, index: number) {
    if (index < 0 || index > this.#size)
      throw new Error('invalid index')

    const node = new Node(value)

    if (index === 0) {
      node.next = this.#head
      this.#head = node
    }
    else {
      let curr = this.#head
      let prev: Node | undefined
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

  removeFrom(index: number) {
    if (index < 0 || index >= this.#size)
      throw new Error('invalid index')

    let curr = this.#head
    if (index === 0) {
      this.#head = curr?.next
    }
    else {
      let prev: Node | undefined
      let counter = 0
      while (counter++ < index) {
        prev = curr
        curr = curr!.next
      }

      prev!.next = curr?.next
    }
    this.#size--

    return curr?.value
  }

  // removes a given element from the list
  removeElement(value: T) {
    let curr = this.#head
    let prev: Node | undefined

    while (curr) {
      if (curr.value === value) {
        if (prev)
          prev.next = curr.next
        else
          this.#head = curr.next

        this.#size--
        return curr.value
      }

      prev = curr
      curr = curr.next
    }

    return -1
  }

  // finds the index of element
  indexOf(value: T) {
    let index = 0
    let curr = this.#head

    while (curr) {
      if (curr.value === value)
        return index
      index++
      curr = curr.next
    }

    return -1
  }

  isEmpty() {
    return this.#size === 0
  }

  clear() {
    this.#head = undefined
    this.#size = 0
  }

  get size() {
    return this.#size
  }

  *[Symbol.iterator]() {
    let curr = this.#head

    while (curr) {
      yield curr.value
      curr = curr.next
    }
  }

  toString() {
    let curr = this.#head
    const str: T[] = []

    while (curr) {
      str.push(curr.value)
      curr = curr.next
    }

    return str.join(', ')
  }
}
