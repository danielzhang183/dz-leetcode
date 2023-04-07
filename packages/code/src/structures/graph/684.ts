export function findRedundantConnection1(edges: number[][]): number[] {
  const n = edges.length
  const parent = Array.from({ length: n + 1 }, (_, index) => index)

  const find = (u: number) =>
    u === parent[u] ? u : parent[u] = find(parent[u])

  const union = (u: number, v: number) =>
    parent[find(u)] = find(v)

  for (const edge of edges) {
    const [u, v] = edge
    if (find(u) !== find(v))
      union(u, v)
    else
      return edge
  }

  return [0]
}

class UnionFind {
  ancestor: number[]

  constructor(n: number) {
    this.ancestor = Array.from(
      { length: n + 1 },
      (_, index) => index,
    )
  }

  find(u: number) {
    return u === this.ancestor[u]
      ? u
      : this.ancestor[u] = this.find(this.ancestor[u])
  }

  union(u: number, v: number) {
    this.ancestor[this.find(u)] = this.find(v)
  }
}

export function findRedundantConnection2(edges: number[][]): number[] {
  const n = edges.length
  const uf = new UnionFind(n)

  for (const edge of edges) {
    const [u, v] = edge
    if (uf.find(u) !== uf.find(v))
      uf.union(u, v)
    else
      return edge
  }

  return [0]
}

// DFS

// Recursive
export function findRedundantConnection3(edges: number[][]): number[] {
  const n = edges.length
  const graph: number[][] = [[]]
  const visited = new Uint16Array(n + 1).fill(0)
  const dfs = (u: number, v: number): boolean => {
    if (u === v)
      return true
    if (visited[u] || !graph[u])
      return false

    visited[u] = 1
    for (let i = 0; i < graph[u].length; i++) {
      if (dfs(graph[u][i], v))
        return true
    }
    return false
  }

  for (const [u, v] of edges) {
    if (dfs(u, v))
      return [u, v]
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
  }

  return [0]
}

// Stack
export function findRedundantConnection4(edges: number[][]): number[] {
  const graph: number[][] = [[]]
  const visited = new Uint8Array(edges.length + 1).fill(0)
  const dfs = (u: number, v: number): boolean => {
    const stack = [u]
    while (stack.length) {
      const curr = stack.pop()!
      if (curr === v)
        return true
      if (visited[curr] || !graph[curr])
        continue

      visited[curr] = 1
      for (const v of graph[u]) {
        if (v)
          stack.push(v)
      }
    }
    return false
  }

  for (const [u, v] of edges) {
    if (dfs(u, v))
      return [u, v]
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
  }

  return [0]
}

/**
 *
graph: [ [], [ 2 ],    [ 1 ] ],                        u: [ 2 ],    v: [ 1 ]
graph: [ [], [ 2 ],    [ 1, 3 ], [ 2 ] ],              u: [ 1, 3 ], v: [ 2 ]
graph: [ [], [ 2 ],    [ 1, 3 ], [ 2, 4 ], [ 3 ] ],    u: [ 2, 4 ], v: [ 3 ]
graph: [ [], [ 2, 4 ], [ 1, 3 ], [ 2, 4 ], [ 3, 1 ] ], u: [ 2, 4 ], v: [ 3, 1 ]
 */

// BFS
export function findRedundantConnection5(edges: number[][]): number[] {
  const graph: number[][] = [[]]
  const visited = new Uint8Array(edges.length + 1).fill(0)
  const recur = (u: number, v: number): boolean => {
    const queue = [u]
    while (queue.length) {
      const curr = queue.shift()!
      if (curr === v)
        return true
      if (visited[curr] || !graph[curr])
        continue

      visited[curr] = 1
      for (const v of graph[u]) {
        if (v)
          queue.push(v)
      }
    }
    return false
  }

  for (const [u, v] of edges) {
    if (recur(u, v))
      return [u, v]
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
  }

  return [0]
}

// optimized
export function findRedundantConnection6(edges: number[][]): number[] {
  const graph: number[][] = [[]]
  const visited = new Uint8Array(edges.length + 1).fill(0)
  const recur = (u: number, v: number): boolean => {
    const queue = [u]
    let start = 0
    while (queue.length) {
      const curr = queue[start++]
      if (curr === v)
        return true
      if (visited[curr] || !graph[curr])
        continue

      visited[curr] = 1
      for (const v of graph[u]) {
        if (v)
          queue.push(v)
      }
    }
    return false
  }

  for (const [u, v] of edges) {
    if (recur(u, v))
      return [u, v]
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
  }

  return [0]
}

// Topological Sorting
// BFS
export function findRedundantConnection7(edges: number[][]): number[] {
  const n = edges.length
  const graph: number[][] = [[]]
  const deg = new Uint8Array(n + 1).fill(0)
  const recur = () => {
    const q = deg.filter(i => i === 1) as any as number[]
    let start = 0
    while (start < q.length) {
      const curr = q[start++]
      if (!graph[curr])
        continue
      for (const v of graph[curr]) {
        if (--deg[v] === 1)
          q.push(v)
      }
    }
  }

  // init degree map & construct graph
  for (const [u, v] of edges) {
    deg[u]++
    deg[v]++
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
  }

  recur()
  for (const [u, v] of edges) {
    if (deg[u] > 1 && deg[v] > 1)
      return [u, v]
  }
  return [0]
}

// DFS
export function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length
  const graph: number[][] = [[]]
  const visited = new Uint8Array(n + 1)
  const dfs = (u: number): boolean => {
    if (visited[u] >= 1)
      return visited[u] === 2
    visited[u] = 1
    for (const v of graph[u]) {
      if (dfs(v))
        return true
    }
    visited[u] = 2
    return false
  }

  for (const [u, v] of edges) {
    if (!graph[u])
      graph[u] = []
    graph[u].push(v)
    if (!graph[v])
      graph[v] = []
    graph[v].push(u)
    if (dfs(u))
      return [u, v]
    visited.fill(0)
  }

  return []
}

findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4]])
