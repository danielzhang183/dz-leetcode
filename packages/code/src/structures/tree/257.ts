import type { TreeNode } from '../../utils'

// Recursive
export function binaryTreePaths1(root: TreeNode | null): string[] {
  if (!root)
    return []

  const ans: string[] = []
  const dfs = (root: TreeNode, path: string) => {
    if (root.left == null && root.right == null) {
      ans.push(path)
      return
    }
    if (root.left)
      dfs(root.left, `${path}->${root.left.val}`)
    if (root.right)
      dfs(root.right, `${path}->${root.right.val}`)
  }
  dfs(root, `${root.val}`)
  return ans
}

// BFS - Stack
class PathNode {
  constructor(
    public node: TreeNode,
    public path: string,
  ) {}
}

export function binaryTreePaths(root: TreeNode | null): string[] {
  if (root == null)
    return []

  const stack = [new PathNode(root, `${root.val}`)]
  const ans: string[] = []
  while (stack.length) {
    const { node, path } = stack.shift()!
    if (node.left == null && node.right == null) {
      ans.push(path)
      continue
    }

    if (node.left)
      stack.push(new PathNode(node.left, `${path}->${node.left.val}`))
    if (node.right)
      stack.push(new PathNode(node.right, `${path}->${node.right.val}`))
  }

  return ans
}
