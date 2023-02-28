import type { TreeNode } from '../../utils'

// DFS
export function searchBST1(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null)
    return null

  if (root.val === val)
    return root

  return searchBST(root.val! < val ? root.right : root.left, val)
}

// BFS - Stack
// worse, more common
export function searchBST2(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null)
    return null

  const stack: (TreeNode | null)[] = [root]
  while (stack.length) {
    let size = stack.length

    while (size--) {
      const curr = stack.shift()!

      if (curr == null)
        continue
      if (curr.val === val)
        return curr

      stack.push(curr.val! < val ? curr.right : curr.left)
    }
  }

  return null
}

// better, use BST advantage
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let curr = root
  while (curr) {
    if (curr.val === val)
      return curr
    else if (curr.val! < val)
      curr = curr.right
    else
      curr = curr.left
  }
  return null
}
