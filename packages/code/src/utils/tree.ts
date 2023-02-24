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

}
