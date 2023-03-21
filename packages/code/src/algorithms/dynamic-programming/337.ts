import type { TreeNode } from './../../utils/tree'

// DFS
export function rob(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null) => {
    if (root == null)
      return [0, 0]

    const l = dfs(root.left)
    const r = dfs(root.right)
    const selected = root.val! + l![1] + r![1]
    const noSelected = Math.max(l![0], l![1]) + Math.max(r![0], r![1])
    return [selected, noSelected]
  }

  const ans = dfs(root)
  return Math.max(ans[0], ans[1])
}
