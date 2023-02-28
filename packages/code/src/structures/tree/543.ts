import type { TreeNode } from '../../utils'

// DFS
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0
  const depth = (root: TreeNode | null): number => {
    if (root == null)
      return 0

    const left = depth(root.left)
    const right = depth(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }

  depth(root)
  return max
}
