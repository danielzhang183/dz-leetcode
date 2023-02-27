import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// Recursive
export function maxDepth1(root: TreeNode | null): number {
  let max = 0
  const dfs = (root: TreeNode | null, depth = 0) => {
    if (!root)
      return 0

    depth++
    max = Math.max(max, depth)
    if (root.left)
      dfs(root.left, depth)
    if (root.right)
      dfs(root.right, depth)
  }

  dfs(root)
  return max
}

// BFS - Stack
export function maxDepth2(root: TreeNode | null): number {
  if (!root)
    return 0

  let depth = 0
  const stack = [root]
  while (stack.length) {
    let size = stack.length
    while (size--) {
      const curr = stack.shift()!
      if (curr.left)
        stack.push(curr.left)
      if (curr.right)
        stack.push(curr.right)
    }
    depth++
  }

  return depth
}

// BFS - Queue
export function maxDepth(root: TreeNode | null): number {
  if (!root)
    return 0

  let depth = 0
  const q = new Queue<TreeNode | null>()
  q.enqueue(root)

  while (!q.isEmpty()) {
    let size = q.size
    while (size--) {
      const curr = q.dequeue()!
      if (curr.left)
        q.enqueue(curr.left)
      if (curr.right)
        q.enqueue(curr.right)
    }
    depth++
  }

  return depth
}
