export class CircularQueue {
  #data: any[] = []
  #size = 0
  #head = 0
  #length = 0

  constructor(size: number) {
    this.clear()
    this.#size = size
    this.#data = new Array(size)
  }

  enQueue(value: any): boolean {
    if (this.isFull())
      return false

    this.#data[(this.#head + this.#length) % this.#size] = value
    this.#length++

    return true
  }

  deQueue() {
    if (this.isEmpty())
      return false

    delete this.#data[this.#head]
    this.#head = ++this.#head % this.#size
    this.#length--

    return true
  }

  Front() {
    if (this.isEmpty())
      return -1

    return this.#data[this.#head]
  }

  Rear() {
    if (this.isEmpty())
      return -1

    return this.#data[(this.#head + this.#length - 1) % this.#size]
  }

  isEmpty() {
    return this.#length === 0
  }

  isFull() {
    return this.#length === this.#size
  }

  clear() {
    this.#data = []
    this.#head = 0
    this.#size = 0
    this.#length = 0
  }

  get size() {
    return this.#size
  }
}
