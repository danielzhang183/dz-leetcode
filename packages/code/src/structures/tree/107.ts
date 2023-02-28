import type { TreeNode } from '../../utils'

// DFS
export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root == null)
    return []

  const dfs = (root: TreeNode, level: number, stack: number[][]) => {
    if (level > stack.length)
      stack.push([])

    stack[level - 1].push(root.val!)

    if (root.left)
      dfs(root.left, level + 1, stack)
    if (root.right)
      dfs(root.right, level + 1, stack)
  }

  const ans: number[][] = []
  dfs(root, 1, ans)

  return ans.reverse()
}

// BFS
export function levelOrderBottom1(root: TreeNode | null): number[][] {
  if (root == null)
    return []

  const ans: number[][] = []
  const stack: TreeNode[] = [root]

  while (stack.length) {
    const size = stack.length
    ans.push([])

    for (let i = 0; i < size; i++) {
      const curr = stack.shift()!
      ans[ans.length - 1].push(curr.val!)
      if (curr.left)
        stack.push(curr.left)
      if (curr.right)
        stack.push(curr.right)
    }
  }

  return ans.reverse()
}
