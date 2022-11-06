---
title: Linked List
description: Common Data Structure
date: 2022-11-02T16:00:00.000+00:00
type: LL
lang: en
duration: 5min
---

[[toc]]

## APIs

* `add(e)` Push element to the back of the ll
* `insertAt(e, i)` Insert element at the position index of the list
* `removeFrom(i)` Remove an element from the specified position
* `removeElement(e)` Remove a given element from the ll
* `indexOf(e)` Return the position of element
* `isEmpty()` Return the ll is empty
* `clear()` Clear out all the element in ll
* `toString()` Return all the value of ll with `,` split
* `iteratable` Iterator element of ll contains

**property**

* `size` Return the num of element at current ll

## Usage

```ts
const ll = new LinkedList()
ll.add(1) // ll is [1]
ll.add(2) // ll is [1, 2]
ll.add(4) // ll is [1, 2, 4]
ll.insertAt(3, 2) // ll is [1, 2, 3, 4]
ll.removeFrom(3) // 4, ll is [1, 2, 3]
ll.removeElement(4) // -1, ll is [1, 2, 3]
ll.removeElement(3) // 3, ll is [1, 2]
ll.indexOf(1) // 0
ll.indexOf(3) // -1
ll.toString() // '1, 2'
ll.size // 2, ll is [1, 2]
ll.isEmpty() // false
ll.clear() // ll is []
ll.size // 0
ll.isEmpty() // true
```

## Implement

### pre

```ts
class Node {
  value: any
  next: Node | undefined

  constructor(value: any) {
    this.value = value
  }
}
```

### add(value)

```ts
add(value: any) {
  const node = new Node(value)

  if (this.#head) {
    let curr = this.#head
    while (curr.next)
      curr = curr.next
    curr.next = node
  }
  else
    this.#head = node

  this.#size++
}
```

### insertAt(value, index)

```ts
insertAt(value: any, index: number) {
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
```

### removeFrom(index)

```ts
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
```

### indexOf(value)

```ts
indexOf(value: any) {
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
```

### Complete Code

```ts
export class LinkedList {
  #head: Node | undefined
  #size = 0

  constructor() {
    this.clear()
  }

  add(value: any) {
    const node = new Node(value)

    if (this.#head) {
      let curr = this.#head
      while (curr.next)
        curr = curr.next
      curr.next = node
    }
    else { this.#head = node }

    this.#size++
  }

  // insert element at the position index of the list
  insertAt(value: any, index: number) {
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
  removeElement(value: any) {
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
  indexOf(value: any) {
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
    const str: any[] = []

    while (curr) {
      str.push(curr.value)
      curr = curr.next
    }

    return str.join(', ')
  }
}
```
