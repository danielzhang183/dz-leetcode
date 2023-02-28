import type { TreeNode } from '../../utils'

// DFS
export function averageOfLevels1(root: TreeNode | null): number[] {
  const sums = new Map<number, number>()
  const counts = new Map<number, number>()
  const dfs = (
    root: TreeNode | null,
    level: number,
    sums: Map<number, number>,
    counts: Map<number, number>,
  ) => {
    if (root == null)
      return

    if (level < sums.size) {
      sums.set(level, sums.get(level)! + root.val!)
      counts.set(level, counts.get(level)! + 1)
    }
    else {
      sums.set(level, root.val!)
      counts.set(level, 1)
    }
    dfs(root.left, level + 1, sums, counts)
    dfs(root.right, level + 1, sums, counts)
  }
  dfs(root, 0, sums, counts)

  const averages: number[] = []
  for (let i = 0; i < sums.size; i++)
    averages.push(sums.get(i)! / counts.get(i)!)

  return averages
}

// BFS - Stack
export function averageOfLevels(root: TreeNode | null): number[] {
  if (root == null)
    return []

  const ans: number[] = []
  const stack = [root]
  while (stack.length) {
    let sum = 0
    const size = stack.length

    for (let i = 0; i < size; i++) {
      const curr = stack.shift()!
      sum += curr.val ?? 0
      if (curr.left)
        stack.push(curr.left)

      if (curr.right)
        stack.push(curr.right)
    }

    ans.push(sum / size)
  }

  return ans
}
