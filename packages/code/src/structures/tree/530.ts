import type { TreeNode } from '../../utils'

// DFS
export function getMinimumDifference1(root: TreeNode | null): number {
  let min = Infinity
  let prev = -1
  const dfs = (root: TreeNode | null) => {
    if (root == null)
      return

    dfs(root.left)
    if (prev !== -1)
      min = Math.min(min, root.val! - prev)
    prev = root.val!
    dfs(root.right)
  }

  dfs(root)
  return min
}

// Morris

export function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity
  let prev = -1
  const update = (val: number) => {
    if (prev !== -1)
      min = Math.min(min, val - prev)
    prev = val
  }

  let predecessor: TreeNode | null = null
  while (root) {
    if (root.left) {
      predecessor = root.left
      while (predecessor.right != null && predecessor.right !== root)
        predecessor = predecessor.right

      if (predecessor!.right == null) {
        predecessor!.right = root
        root = root.left
      }
      else {
        update(root.val!)
        predecessor!.right = null
        root = root.right
      }
    }
    else {
      update(root.val!)
      root = root.right
    }
  }

  return min
}
