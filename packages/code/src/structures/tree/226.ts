import type { TreeNode } from '../../utils'
import { Queue } from '../../utils/queue'

// DFS
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root == null)
    return null

  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left

  return root
}

// BFS
// Queue
export function invertTree1(root: TreeNode | null): TreeNode | null {
  const q = new Queue<TreeNode | null>()
  q.enqueue(root)

  while (!q.isEmpty()) {
    let size = q.size
    while (size--) {
      const curr = q.dequeue()!
      if (curr == null)
        continue

      [curr.left, curr.right] = [curr.right, curr.left]

      if (curr.left)
        q.enqueue(curr.left)
      if (curr.right)
        q.enqueue(curr.right)
    }
  }

  return root
}

// Stack
export function invertTree(root: TreeNode | null): TreeNode | null {
  const stack: (TreeNode | null)[] = [root]

  while (stack.length) {
    let size = stack.length
    while (size--) {
      const curr = stack.shift()!
      if (curr == null)
        continue

      [curr.left, curr.right] = [curr.right, curr.left]

      if (curr.left)
        stack.push(curr.left)
      if (curr.right)
        stack.push(curr.right)
    }
  }

  return root
}
