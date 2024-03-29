export class TreeNode<T = number> {
  val: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = (val === undefined ? 0 : val) as T
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export class BinaryTree<T = number> {
  #root: TreeNode<T> | null = null
  #height = 0

  constructor(value?: T[]) {
    this.clear()

    if (Array.isArray(value))
      this.createByLayer(value)
  }

  add(value: T) {
    const treeNode = new TreeNode((value || 0) as T)

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
    const stack: (TreeNode<T>)[] = [root]
    let i = 1
    while (i < value.length) {
      while (stack.length--) {
        this.#height++

        const curr = stack.shift()!
        if (value[i] != null) {
          curr.left = new TreeNode<T>(value[i])
          stack.push(curr.left)
        }
        i++
        if (value[i] != null) {
          curr.right = new TreeNode<T>(value[i])
          stack.push(curr.right)
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
