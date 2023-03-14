---
title: Queue
description: Common Data Structure
date: 2022-10-30T16:00:00.000+00:00
type: Queue
lang: en
duration: 5min
---

[[toc]]

> FIFO: First In, First Out

## APIs

* `enqueue(e)` Pushes element to the back of the queue
* `dequeue()` Removes the element from the front of the queue and returns it.
* `clear()` Clear out all the element in queue
* `iterable` Iterator element of queue contains

**property**

* `size` Return the num of element at current queue

## Usages

```ts
const queue = new Queue()
queue.enqueue(1) // queue is: [1]
queue.enqueue(2) // queue is: [1, 2] (leftmost is front of the queue)
queue.size() // return 2
queue.dequeue() // return 1, queue is [2]
queue.clear() // queue is: []
```

## Implement

### Pre

```ts
class Node {
  value: any
  next: Node | undefined

  constructor(value: any) {
    this.value = value
  }
}
```

### enqueue(value)

```ts
function enqueue(value: any) {
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
```

### dequeue()

```ts
function dequeue() {
  const current = this.#head
  if (!current)
    return

  this.#head = this.#head?.next
  this.#size--
  return current.value
}
```

### Completed code

```ts
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
```
