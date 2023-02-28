import type { TreeNode } from '../../utils'

// DFS
export function isBalanced1(root: TreeNode | null): boolean {
  if (root == null)
    return true

  const height = (root: TreeNode | null): number => {
    if (root == null)
      return 0
    return Math.max(height(root.left), height(root.right)) + 1
  }

  return Math.abs(height(root.left) - height(root.right)) <= 1
    && isBalanced(root.left)
    && isBalanced(root.right)
}

// DFS - bottom to top
export function isBalanced(root: TreeNode | null): boolean {
  const height = (root: TreeNode | null): number => {
    if (root == null)
      return 0

    const leftHeight = height(root.left)
    if (leftHeight === -1)
      return -1
    const rightHeight = height(root.right)
    if (rightHeight === -1)
      return -1

    return Math.abs(leftHeight - rightHeight) < 2
      ? Math.max(leftHeight, rightHeight) + 1
      : -1
  }

  return height(root) !== -1
}
