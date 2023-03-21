import type { TreeNode } from '../../utils/tree'

// DFS
export function findBottomLeftValue1(root: TreeNode | null): number {
  if (root == null)
    return 0
  let maxLevel = 0
  let ans = 0
  const dfs = (root: TreeNode, level: number) => {
    if (root.left == null && root.right == null) {
      if (level > maxLevel) {
        maxLevel = level
        ans = root.val!
      }
      return
    }

    if (root.left)
      dfs(root.left, level + 1)
    if (root.right)
      dfs(root.right, level + 1)
  }

  dfs(root, 1)
  return ans
}

// BFS
export function findBottomLeftValue(root: TreeNode | null): number {

}
