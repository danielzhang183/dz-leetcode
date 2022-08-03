/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}
const MyLinkedList = function () {
  this._head = null
  this._tail = null
  this._size = 0
}

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size)
    return null
  let cur = new LinkNode(0, this._head)
  while (index-- >= 0)
    cur = cur.next

  return cur
}
/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size)
    return -1
  return this.getNode(index).val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this._head)
  this._head = node
  this._size++
  if (!this._tail)
    this._tail = node
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null)
  this._size++
  if (this._tail) {
    this._tail.next = node
    this._tail = node
    return
  }
  this._tail = node
  this._head = node
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size)
    return
  if (index <= 0) {
    this.addAtHead(val)
    return
  }
  if (index === this._size) {
    this.addAtTail(val)
    return
  }
  const node = this.getNode(index - 1)
  node.next = new LinkNode(val, node.next)
  this._size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size)
    return
  if (index === 0) {
    this._head = this._head.next
    this._size--
    return
  }
  const node = this.getNode(index - 1)
  node.next = node.next.next
  if (index === this._size - 1)
    this._tail = node
  this._size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
