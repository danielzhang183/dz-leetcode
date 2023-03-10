---
title: Circle Queue
description: Common Data Structure
date: 2022-10-31T16:00:00.000+00:00
type: Queue
lang: en
duration: 5min
---

[[toc]]

> Based on FIFO (Fisrt In, First Out), and the last position is connected back to the first position to make a circle.

**Benefit**

we can `make use of the spaces in front of the queue`. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

## APIs

* `Constructor(k: number)` Initializes the object with the size of the queue to be k.
* `Front(): number` Gets the front item from the queue. If the queue is empty, return -1.
* `Rear(): number` Gets the last item from the queue. If the queue is empty, return -1.
* `enQueue(int value): boolean` Inserts an element into the circular queue. Return true if the operation is successful.
* `deQueue(): boolean` Deletes an element from the circular queue. Return true if the operation is successful.
* `isEmpty(): boolean` Checks whether the circular queue is empty or not.
* `isFull(): boolean` Checks whether the circular queue is full or not.

## Usages

```ts
const circularQueue = new CircularQueue(3)
circularQueue.enQueue(1) // return true, queue is [1]
circularQueue.enQueue(2) // return true, queue is [1, 2]
circularQueue.enQueue(3) // return true, queue is [1, 2, 3]
circularQueue.enQueue(4) // return false, queue is [1, 2, 3]
circularQueue.Rear() // return 3
circularQueue.isFull() // return true
circularQueue.deQueue() // return true, queue is [1, 2]
circularQueue.enQueue(4) // return true, queue is [1, 4]
circularQueue.Rear() // return 4
```

## Implement

```ts
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

  deQueue(): boolean {
    if (this.isEmpty())
      return false

    delete this.#data[this.#head]
    this.#head = ++this.#head % this.#size
    this.#length--

    return true
  }

  Front(): number {
    if (this.isEmpty())
      return -1

    return this.#data[this.#head]
  }

  Rear(): number {
    if (this.isEmpty())
      return -1

    return this.#data[(this.#head + this.#length - 1) % this.#size]
  }

  isEmpty(): boolean {
    return this.#length === 0
  }

  isFull(): boolean {
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
```
