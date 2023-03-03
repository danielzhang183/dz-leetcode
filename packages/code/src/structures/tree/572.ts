import type { TreeNode } from '../../utils'

// DFS
export function isSubtree1(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const dfs = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p == null)
      return false

    return isSameTree(p, q) || dfs(p.left, q) || dfs(p.right, q)
  }

  return dfs(root, subRoot)
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null)
    return q == null

  return q != null
    && p.val === q.val
    && isSameTree(p.left, q.left)
    && isSameTree(p.right, q.right)
}

// DFS + KMP
export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const pOrder: number[] = []
  const qOrder: number[] = []
  const maxElement = -Number.MAX_SAFE_INTEGER
  const lNull = maxElement + 1
  const rNull = maxElement + 2

  function preorderTraversal(t: TreeNode | null, arr: number[]) {
    if (t == null)
      return

    arr.push(t.val!)
    if (t.left)
      preorderTraversal(t.left, arr)
    else
      arr.push(lNull)

    if (t.right)
      preorderTraversal(t.right, arr)
    else
      arr.push(rNull)
  }

  preorderTraversal(root, pOrder)
  preorderTraversal(subRoot, qOrder)

  return kmp(pOrder, qOrder)
}

function kmp(p: number[], q: number[]) {
  const pLen = p.length
  const qLen = q.length
  const fail: number[] = new Array(qLen).fill(-1)

  for (let i = 1, j = -1; i < qLen; i++) {
    while (j !== -1 && q[i] !== q[j + 1])
      j = fail[j]

    if (q[i] === q[j + 1])
      ++j

    fail[i] = j
  }

  for (let i = 0, j = -1; i < pLen; i++) {
    while (j !== -1 && p[i] !== q[j + 1])
      j = fail[j]

    if (p[i] === q[j + 1])
      ++j

    if (j === qLen - 1)
      return true
  }

  return false
}
