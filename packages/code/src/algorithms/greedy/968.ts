import type { TreeNode } from '../../utils'

enum STATUS {
  WILL_COVER,
  COVER,
  NOT_COVER,
}

export function minCameraCover(root: TreeNode | null): number {
  let count = 0
  const dfs = (root: TreeNode | null) => {
    if (root === null)
      return STATUS.NOT_COVER

    const left = dfs(root.left)
    const right = dfs(root.right)

    if (left === STATUS.NOT_COVER && right === STATUS.NOT_COVER)
      return STATUS.WILL_COVER
    if (left === STATUS.WILL_COVER || right === STATUS.WILL_COVER) {
      count++
      return STATUS.COVER
    }
    if (left === STATUS.COVER || right === STATUS.COVER)
      return STATUS.NOT_COVER
  }

  if (dfs(root) === STATUS.WILL_COVER)
    count++
  return count
}
