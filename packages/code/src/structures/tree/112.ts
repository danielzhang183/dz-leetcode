import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// Recursive
export function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
  if (root == null)
    return false
  if (root.left == null && root.right == null)
    return root.val === targetSum

  return hasPathSum(root.left, targetSum - root.val!)
    || hasPathSum(root.right, targetSum - root.val!)
}

// BFS - Queue
class SumNode {
  constructor(
    public node: TreeNode,
    public sum: number = 0,
  ) {}
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null)
    return false

  const q = new Queue<SumNode | null>()
  q.enqueue(new SumNode(root, targetSum - root.val!))
  while (!q.isEmpty()) {
    const { node, sum } = q.dequeue()!
    if (node.left == null && node.right == null) {
      if (sum === 0)
        return true
      continue
    }

    if (node.left)
      q.enqueue(new SumNode(node.left, sum - node.left.val!))
    if (node.right)
      q.enqueue(new SumNode(node.right, sum - node.right.val!))
  }

  return false
}

// BFS - stack
export function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (root == null)
    return false

  const stack = [new SumNode(root, targetSum - root.val!)]
  while (stack.length) {
    const { node, sum } = stack.shift()!
    if (node.left == null && node.right == null) {
      if (sum === 0)
        return true
      continue
    }

    if (node.left)
      stack.push(new SumNode(node.left, sum - node.left.val!))
    if (node.right)
      stack.push(new SumNode(node.right, sum - node.right.val!))
  }

  return false
}
