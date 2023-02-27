import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// recursive
export function isSameTree1(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null)
    return q == null

  return q != null
    && p.val === q.val
    && isSameTree(p.left, q.left)
    && isSameTree(p.right, q.right)
}

// bfs
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = new Queue<TreeNode | null>()
  queue.enqueue(p)
  queue.enqueue(q)
  while (!queue.isEmpty()) {
    p = queue.dequeue()
    q = queue.dequeue()
    if (p == null && q == null)
      continue
    if ((p == null || q == null) || p.val !== q.val)
      return false

    queue.enqueue(p.left)
    queue.enqueue(q.left)
    queue.enqueue(p.right)
    queue.enqueue(q.right)
  }

  return true
}
