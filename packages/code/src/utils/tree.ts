import { Queue } from './queue'

export class TreeNode<T = number | null> {
  val: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = (val === undefined ? 0 : val) as T
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export class BinaryTree<T = number | null> {
  #root: TreeNode<T> | null = null
  #height = 0

  constructor(value?: T[]) {
    this.clear()

    if (Array.isArray(value))
      this.createByLayer(value)
  }

  add(value: T) {
    const treeNode = new TreeNode(value)

    if (this.#root) {
      //
    }
    else {
      this.#root = treeNode
    }
  }

  createByLayer(value: T[]) {
    if (!value.length)
      return null

    const root = new TreeNode<T>(value[0])
    const stack: TreeNode<T>[] = [root]
    let i = 1

    while (i < value.length) {
      let len = stack.length

      while (len--) {
        this.#height++
        const curr = stack.shift()!

        if (value[i] != null) {
          curr.left = new TreeNode<T>(value[i])
          stack.push(curr.left)
        }
        else {
          curr.left = null
        }
        i++
        if (value[i] != null) {
          curr.right = new TreeNode<T>(value[i])
          stack.push(curr.right)
        }
        else {
          curr.right = null
        }
        i++
      }
    }

    this.#root = root
  }

  clear() {
    this.#root = null
    this.#height = 0
  }

  get height() {
    return this.#height
  }

  get val() {
    return this.#root
  }
}

export function createBinaryTree<T = number | null>(value?: T[]): TreeNode<T> | null {
  if (!value || !value.length)
    return null

  return new BinaryTree<T>(value).val!
}

export function covertBinaryTreeToArray<T = number>(root: TreeNode<T> | null) {
  if (root == null)
    return []

  const res: T[] = []
  const q = new Queue<TreeNode<T>>()
  q.enqueue(root)
  while (!q.isEmpty()) {
    let size = q.size

    while (size--) {
      const curr = q.dequeue()!
      res.push(curr.val)

      if (curr.left)
        q.enqueue(curr.left)
      if (curr.right)
        q.enqueue(curr.right)
    }
  }

  return res
}
