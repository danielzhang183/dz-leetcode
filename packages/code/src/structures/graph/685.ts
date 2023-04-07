import { UnionFind } from '../../utils'

export function findRedundantDirectedConnection(edges: number[][]): number[] {
  const n = edges.length
  const uf = new UnionFind(n)
  const parent = Array.from(
    { length: n + 1 },
    (_, index) => index,
  )
  let conflict = -1
  let cycle = -1
  for (let i = 0; i < n; i++) {
    const [u, v] = edges[i]
    if (parent[v] !== v) {
      conflict = i
    }
    else {
      parent[v] = u
      if (uf.find(u) !== uf.find(v))
        uf.union(u, v)
      else
        cycle = i
    }
  }

  if (conflict < 0) {
    return edges[cycle]
  }
  else {
    const conflictEdge = edges[conflict]
    if (cycle >= 0)
      return [parent[conflictEdge[1]], conflictEdge[1]]
    else
      return conflictEdge
  }
}
