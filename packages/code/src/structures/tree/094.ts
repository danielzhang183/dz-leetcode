import type { TreeNode } from '../../utils'

// recursive
export function inorderTraversal2(root: TreeNode | null): number[] {
  const ans: number[] = []

  const inorder = (root: TreeNode | null) => {
    if (root == null)
      return

    inorder(root.left)
    ans.push(root.val!)
    inorder(root.right)
  }

  inorder(root)
  return ans
}

// traverse
export function inorderTraversal1(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = []
  let curr = root

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    ans.push(curr.val!)
    curr = curr.right
  }

  return ans
}

// morris
export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  let predecessor: TreeNode | null = null
  while (root) {
    if (root.left) {
      predecessor = root.left
      while (predecessor.right != null && predecessor.right !== root)
        predecessor = predecessor.right

      if (predecessor!.right == null) {
        predecessor!.right = root
        root = root.left
      }
      else {
        ans.push(root.val!)
        predecessor!.right = null
        root = root.right
      }
    }
    else {
      ans.push(root.val!)
      root = root.right
    }
  }

  return ans
}
