import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// Recursive
export function minDepth1(root: TreeNode | null): number {
  if (!root)
    return 0
  if (!root.left && !root.right)
    return 1

  let min = Number.MAX_SAFE_INTEGER
  if (root.left)
    min = Math.min(min, minDepth(root.left))
  if (root.right)
    min = Math.min(min, minDepth(root.right))

  return min + 1
}

// BFS - Queue
class DepthNode {
  constructor(public node: TreeNode, public depth = 0) {
  }
}

export function minDepth(root: TreeNode | null): number {
  if (!root)
    return 0

  const q = new Queue<DepthNode>()
  q.enqueue(new DepthNode(root, 1))

  while (!q.isEmpty()) {
    const { node, depth } = q.dequeue()!
    if (node.left == null && node.right == null)
      return depth
    if (node.left != null)
      q.enqueue(new DepthNode(node.left, depth + 1))
    if (node.right != null)
      q.enqueue(new DepthNode(node.right, depth + 1))
  }

  return 0
}
