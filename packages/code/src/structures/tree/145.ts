import type { TreeNode } from '../../utils'

// recursive
export function postorderTraversal1(root: TreeNode | null): number[] {
  const ans: number[] = []
  const postorder = (root: TreeNode | null) => {
    if (root == null)
      return
    // console.log({ root: root.val })

    postorder(root.left)
    postorder(root.right)
    ans.push(root.val!)
  }

  postorder(root)
  return ans
}

// traverse
export function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack = []
  let prev: TreeNode | null = null
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()!
    if (root.right == null || root.right === prev) {
      ans.push(root.val!)
      prev = root
      root = null
    }
    else {
      stack.push(root)
      root = root.right
    }
  }

  return ans
}

// morris
// export function postorderTraversal2(root: TreeNode | null): number[] {

// }
