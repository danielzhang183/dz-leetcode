import type { TreeNode } from '../../utils'

// DFS
export function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = []

  const dfs = (root: TreeNode | null, depth: number) => {
    if (root == null)
      return

    if (depth === ans.length)
      ans.push(root.val!)

    depth++
    dfs(root.right, depth)
    dfs(root.left, depth)
  }

  dfs(root, 0)
  return ans
}

// BFS
export function rightSideView1(root: TreeNode | null): number[] {
  if (root == null)
    return []

  const ans: number[] = []
  const stack = [root]
  while (stack.length) {
    let size = stack.length

    while (size--) {
      const curr = stack.shift()!
      if (curr.left)
        stack.push(curr.left)
      if (curr.right)
        stack.push(curr.right)
      // last node means right-side node
      !size && ans.push(curr.val!)
    }
  }

  return ans
}
