export class QueueNode<T = number | null> {
  value: T
  next: QueueNode<T> | null

  constructor(value: T, next?: QueueNode<T>) {
    this.value = value
    this.next = next === undefined ? null : next
  }
}

export class Queue<T = number | null> {
  #head: QueueNode<T> | null = null
  #tail: QueueNode<T> | null = null
  #size = 0

  constructor() {
    this.clear()
  }

  enqueue(value: T) {
    const node = new QueueNode<T>(value)

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
    const curr = this.#head
    if (!curr)
      return null

    this.#head = this.#head!.next
    this.#size--

    return curr.value
  }

  clear() {
    this.#head = null
    this.#tail = null
    this.#size = 0
  }

  top() {
    return this.#tail ? this.#tail.value : undefined
  }

  get size() {
    return this.#size
  }

  isEmpty() {
    return this.#size === 0
  }

  * [Symbol.iterator]() {
    let curr = this.#head

    while (curr) {
      yield curr.value
      curr = curr.next
    }
  }
}
