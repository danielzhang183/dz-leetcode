import type { TreeNode } from '../../utils'

// DFS
export function isValidBST1(root: TreeNode | null): boolean {
  const dfs = (root: TreeNode | null, lower: number, upper: number): boolean => {
    if (root == null)
      return true

    if (lower >= root.val! || upper <= root.val!)
      return false

    return dfs(root.left, lower, root.val!)
      && dfs(root.right, root.val!, upper)
  }

  return dfs(root, -Infinity, Infinity)
}

// Inorder Traversal
export function isValidBST(root: TreeNode | null): boolean {
  const stack = []
  let prevVal = -Infinity

  while (stack.length || root != null) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    if (root.val! <= prevVal)
      return false
    prevVal = root.val!
    root = root.right
  }

  return true
}
