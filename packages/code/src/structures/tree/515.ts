import type { TreeNode } from '../../utils'

// DFS
export function largestValues(root: TreeNode | null): number[] {
  if (root == null)
    return []

  const ans = new Map<number, number>()
  const dfs = (root: TreeNode, level: number) => {
    if (level < ans.size)
      ans.set(level, -Infinity)

    if (ans.get(level)! < root.val!)
      ans.set(level, root.val!)

    if (root.left)
      dfs(root.left, level + 1)
    if (root.right)
      dfs(root.right, level + 1)
  }

  dfs(root, 0)
  return ans.values()
}

// BFS
export function largestValues1(root: TreeNode | null): number[] {
  if (root == null)
    return []

  const ans: number[] = []
  const stack = [root]

  while (stack.length) {
    let size = stack.length
    let max = -Infinity

    while (size--) {
      const curr = stack.shift()!
      max = Math.max(max, curr.val!)

      if (curr.left)
        stack.push(curr.left)
      if (curr.right)
        stack.push(curr.right)
    }

    ans.push(max)
  }

  return ans
}
