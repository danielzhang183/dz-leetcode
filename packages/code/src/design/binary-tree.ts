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

    if (Array.isArray(value)) {
      //
    }
  }

  add(value: T | null) {
    const treeNode = new TreeNode((value || 0) as T)

    if (this.#root) {
      let parent: TreeNode | null = null
      let curr = this.#root
      while (true) {
        parent = curr

        if (curr.left != null) {
          curr = curr.left
        }
        else if (curr.right != null) {
          curr = curr.right
        }
      }
    }
    else {
      this.#root = treeNode
    }
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
