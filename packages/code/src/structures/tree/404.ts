import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// Recursive
const isLeaveNode = (node: TreeNode) => node.left == null && node.right == null

export function sumOfLeftLeaves1(root: TreeNode | null): number {
  const dfs = (root: TreeNode) => {
    let sum = 0
    if (root.left)
      sum += isLeaveNode(root.left) ? root.left.val! : dfs(root.left)
    if (root.right && !isLeaveNode(root.right))
      sum += dfs(root.right)

    return sum
  }

  return root === null ? 0 : dfs(root)
}

// BFS - Queue
export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root == null)
    return 0

  let sum = 0
  const q = new Queue<TreeNode>()
  q.enqueue(root)
  while (!q.isEmpty()) {
    const node = q.dequeue()!
    if (node.left) {
      if (isLeaveNode(node.left))
        sum += node.left.val!
      else
        q.enqueue(node.left)
    }

    if (node.right && !isLeaveNode(node.right))
      q.enqueue(node.right)
  }

  return sum
}

// BFS - Stack
export function sumOfLeftLeaves2(root: TreeNode | null): number {
  if (root == null)
    return 0

  let sum = 0
  const stack = [root]
  while (stack.length) {
    const node = stack.shift()!
    if (node.left) {
      if (isLeaveNode(node.left))
        sum += node.left.val!
      else
        stack.push(node.left)
    }

    if (node.right && !isLeaveNode(node.right))
      stack.push(node.right)
  }

  return sum
}
