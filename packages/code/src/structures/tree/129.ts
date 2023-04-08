import type { TreeNode } from './../../utils/tree'

// DFS
export function sumNumbers1(root: TreeNode | null): number {
  if (root == null)
    return 0

  let sum = 0
  const dfs = (root: TreeNode, carry: string) => {
    if (root.left == null && root.right == null) {
      sum += Number(carry)
    }
    else {
      if (root.left)
        dfs(root.left, carry + root.left.val)
      if (root.right)
        dfs(root.right, carry + root.right.val)
    }
  }

  dfs(root, String(root.val))
  return sum
}

// BFS
export function sumNumbers(root: TreeNode | null): number {
  if (root == null)
    return 0

  let sum = 0
  const q: TreeNode[] = [root]
  while (q.length) {
    let size = q.length
    while (size--) {
      const curr = q.shift()!
      if (curr.left == null && curr.right == null) {
        sum += curr.val!
      }
      else {
        if (curr.left) {
          curr.left.val = curr.val! * 10 + curr.left.val!
          q.push(curr.left)
        }
        if (curr.right) {
          curr.right.val = curr.val! * 10 + curr.right.val!
          q.push(curr.right)
        }
      }
    }
  }

  return sum
}
