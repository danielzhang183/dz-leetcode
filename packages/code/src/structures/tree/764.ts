class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}

// TODO: implement n-ary tree
export function createNaryTree(root: (number | null)[]) {
  return root as any as Node
}

export function levelOrder(root: Node | null): number[][] {
  if (root == null)
    return []

  const ans: number[][] = []
  const q = [root]
  while (q.length) {
    let size = q.length
    const level: number[] = []
    while (size--) {
      const curr = q.shift()!
      level.push(curr.val!)
      q.push(...curr.children)
    }
    level.length && ans.push(level)
  }

  return ans
}
