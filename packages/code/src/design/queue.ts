class Node {
  value: any
  next: Node | undefined

  constructor(value: any) {
    this.value = value
  }
}

class Queue {
  #head: Node | undefined
  #tail: Node | undefined
  #size = 0

  constructor() {
    this.clear()
  }

  enqueue(value: any) {
    const node = new Node(value)

    if (this.#head) {
      this.#tail!.next = node
      this.#tail = node
    }
    else {
      this.#head = node
      this.#tail = node
    }

    this.#size++
  }

  dequeue() {
    const current = this.#head
    if (!current)
      return

    this.#head = this.#head?.next
    this.#size--
    return current.value
  }

  clear() {
    this.#head = undefined
    this.#tail = undefined
    this.#size = 0
  }

  get size() {
    return this.#size
  }

  * [Symbol.iterator]() {
    let current = this.#head

    while (current) {
      yield current.value
      current = current.next
    }
  }
}
