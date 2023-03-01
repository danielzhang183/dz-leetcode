import { TreeNode } from '../../utils'

// DFS

// worse
export function insertIntoBST2(root: TreeNode | null, val: number): TreeNode | null {
  const node = new TreeNode(val)

  if (root == null)
    return (root = node)

  const dfs = (root: TreeNode, val: number) => {
    if (root.val! > val) {
      if (root.left)
        dfs(root.left, val)
      else
        root.left = node
    }
    else {
      if (root.right)
        dfs(root.right, val)
      else
        root.right = node
    }
  }

  dfs(root, val)
  return root
}

// so much better
export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null)
    return new TreeNode(val)

  if (root.val! > val)
    root.left = insertIntoBST(root.left, val)
  if (root.val! < val)
    root.right = insertIntoBST(root.right, val)

  return root
}

// Traveral
export function insertIntoBST1(root: TreeNode | null, val: number): TreeNode | null {
  const node = new TreeNode(val)
  if (root == null)
    return (root = node)

  let curr: TreeNode | null = root
  let parent = curr
  while (curr) {
    parent = curr

    if (curr.val! > val) {
      curr = curr.left
      if (curr == null)
        parent.left = node
    }
    else {
      curr = curr.right
      if (curr == null)
        parent.right = node
    }
  }

  return root
}
