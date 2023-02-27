import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// Recursive
export function isSymmetric1(root: TreeNode | null): boolean {
  if (root == null)
    return true

  const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right)
      return true
    if (!left || !right || left.val !== right.val)
      return false

    return helper(left.left, right.right)
     && helper(left.right, right.left)
  }

  return helper(root.left, root.right)
}

// BFS - Stack
export function isSymmetric2(root: TreeNode | null): boolean {
  if (!root)
    return true

  const stack: (TreeNode | null)[] = [root.left, root.right]
  while (stack.length) {
    const right = stack.pop()
    const left = stack.pop()

    if (!left && !right)
      continue
    if (!left || !right || left.val !== right.val)
      return false

    stack.push(right.right)
    stack.push(left.left)
    stack.push(left.right)
    stack.push(right.left)
  }

  return true
}

// BFS - Queue
export function isSymmetric(root: TreeNode | null): boolean {
  if (!root)
    return true

  const q = new Queue<TreeNode | null>()
  q.enqueue(root.left)
  q.enqueue(root.right)

  while (!q.isEmpty()) {
    const left = q.dequeue()
    const right = q.dequeue()

    if (!left && !right)
      continue
    if (!left || !right || left.val !== right.val)
      return false

    q.enqueue(left.left)
    q.enqueue(right.right)
    q.enqueue(right.left)
    q.enqueue(left.right)
  }

  return true
}
