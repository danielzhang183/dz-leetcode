import type { TreeNode } from '../../utils'

// recursive
export function preorderTraversal1(root: TreeNode | null): number[] {
  const ans: number[] = []
  const preorder = (root: TreeNode | null) => {
    if (root == null)
      return

    ans.push(root.val!)
    preorder(root.left)
    preorder(root.right)
  }

  preorder(root)
  return ans
}

// traverse
export function preorderTraversal2(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = []
  let curr = root
  while (stack.length || curr != null) {
    while (curr != null) {
      ans.push(curr.val!)
      stack.push(curr)
      curr = curr.left
    }

    if (stack.length) {
      curr = stack.pop()!
      curr = curr.right
    }
  }

  return ans
}

// morris
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  let predecessor: TreeNode | null = null

  while (root) {
    if (root.left) {
      predecessor = root.left
      while (predecessor.right != null && predecessor.right !== root)
        predecessor = predecessor.right

      if (predecessor!.right == null) {
        ans.push(root.val!)
        predecessor!.right = root
        root = root.left
      }
      else {
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
