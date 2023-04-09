class DLinkedNode {
  public key: number
  public val: number
  public prev: DLinkedNode | null = null
  public next: DLinkedNode | null = null

  constructor(key?: number, val?: number) {
    if (key != null)
      this.key = key
    if (val != null)
      this.val = val
  }

  append(node: DLinkedNode) {
    node.prev = this
    this.next!.prev = node
    node.next = this.next
    this.next = node
  }

  free() {
    if (this.next)
      this.next.prev = this.prev
    if (this.prev)
      this.prev.next = this.next
  }
}

export class LRUCache {
  private cache = new Map<number, DLinkedNode>()
  private size = 0
  private head: DLinkedNode
  private tail: DLinkedNode

  constructor(public capacity: number) {
    this.clear()
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (node) {
      this.moveToHead(node)
      return node.val
    }

    return -1
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key)
    if (node == null) {
      const newNode = new DLinkedNode(key, value)
      this.cache.set(key, newNode)
      this.addToHead(newNode)
      if (++this.size > this.capacity) {
        const tail = this.removeTail()
        this.cache.delete(tail.key)
        --this.size
      }
    }
    else {
      node.val = value
      this.moveToHead(node)
    }
  }

  clear() {
    this.size = 0
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.tail
  }

  private addToHead(node: DLinkedNode) {
    this.head.append(node)
  }

  private moveToHead(node: DLinkedNode) {
    node.free()
    this.addToHead(node)
  }

  private removeTail(): DLinkedNode {
    const tail = this.tail.prev!
    tail.free()
    return tail
  }

  get entries() {
    let curr: DLinkedNode | null = this.head.next
    const res: string[] = []
    while (curr && curr.key !== undefined) {
      res.push(`${curr.key}=${curr.val}`)
      curr = curr.next
    }

    return `{${res.join(', ')}}`
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
