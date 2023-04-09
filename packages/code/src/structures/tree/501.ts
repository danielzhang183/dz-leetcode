import type { TreeNode } from '../../utils/tree'

// DFS
export function findMode1(root: TreeNode | null): number[] {
  let prev = 0
  let count = 0
  let maxCount = 0
  let ans: number[] = []
  const update = (val: number) => {
    if (val === prev) {
      count++
    }
    else {
      count = 1
      prev = val
    }

    if (count === maxCount)
      ans.push(val)
    if (count > maxCount) {
      maxCount = count
      ans = [val]
    }
  }
  const dfs = (root: TreeNode | null) => {
    if (root == null)
      return

    dfs(root.left)
    update(root.val!)
    dfs(root.right)
  }

  dfs(root)
  return ans
}

// Morris
export function findMode(root: TreeNode | null): number[] {
  let prev = 0
  let count = 0
  let maxCount = 0
  let ans: number[] = []
  const update = (val: number) => {
    if (val === prev) {
      count++
    }
    else {
      count = 1
      prev = val
    }

    if (count === maxCount)
      ans.push(val)
    if (count > maxCount) {
      maxCount = count
      ans = [val]
    }
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

  return ans
}
