import { Queue, TreeNode } from '../../utils'

// DFS
export function mergeTrees1(
  root1: TreeNode | null,
  root2: TreeNode | null,
): TreeNode | null {
  if (root1 == null)
    return root2

  if (root2 == null)
    return root1

  const merged: TreeNode = new TreeNode(root1.val! + root2.val!)
  merged.left = mergeTrees(root1.left, root2.left)
  merged.right = mergeTrees(root1.right, root2.right)

  return merged
}

// BFS
export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null,
): TreeNode | null {
  if (root1 == null)
    return root2

  if (root2 == null)
    return root1

  const merged = new TreeNode(root1.val! + root2.val!)
  const q = new Queue<TreeNode>()
  const q1 = new Queue<TreeNode>()
  const q2 = new Queue<TreeNode>()
  q.enqueue(merged)
  q1.enqueue(root1)
  q2.enqueue(root2)

  while (!q1.isEmpty() && !q2.isEmpty()) {
    const node = q.dequeue()!
    const node1 = q1.dequeue()!
    const node2 = q2.dequeue()!
    const left1 = node1.left
    const left2 = node2.left
    const right1 = node1.right
    const right2 = node2.right

    if (left1 != null || left2 != null) {
      if (left1 != null && left2 != null) {
        const left = new TreeNode(left1.val! + left2.val!)
        node.left = left
        q.enqueue(left)
        q1.enqueue(left1)
        q2.enqueue(left2)
      }
      else if (left1 != null) {
        node.left = left1
      }
      else if (left2 != null) {
        node.left = left2
      }
    }

    if (right1 != null || right2 != null) {
      if (right1 != null && right2 != null) {
        const right = new TreeNode(right1.val! + right2.val!)
        node.right = right
        q.enqueue(right)
        q1.enqueue(right1)
        q2.enqueue(right2)
      }
      else if (right1 != null) {
        node.right = right1
      }
      else {
        node.right = right2
      }
    }
  }

  return merged
}
