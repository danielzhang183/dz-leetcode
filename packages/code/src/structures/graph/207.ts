// [[], [ 3 ], [ 3 ], [], [ 1, 2 ]]
// [2, 0, 0, 0, 0]
// [2, 1, 0, 0, 0]
// [2, 2, 0, 2, 0]
// [2, 2, 1, 2, 0]
// [2, 2, 2, 2, 0]
// [2, 2, 2, 2, 0]
// [2, 2, 2, 2, 1]
// [2, 2, 2, 2, 1]
export function canFinish1(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => [])
  const visited = new Uint8Array(numCourses).fill(0)
  const dfs = (u: number) => {
    if (visited[u] >= 1)
      return visited[u] === 2
    visited[u] = 1
    for (const v of graph[u]) {
      if (!dfs(v))
        return false
    }
    visited[u] = 2
    return true
  }

  for (const [u, v] of prerequisites)
    graph[v].push(u)

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i))
      return false
  }

  return true
}

// BFS
/**
 * tests: [[1, 4], [2, 4], [3, 1], [3, 2]]
 * indegrees: [ 0, 1, 1, 2, 0 ]
 * graph: [[], [3], [3], [], [1, 2]]
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegrees = new Array(numCourses).fill(0)
  const graph: number[][] = Array.from({ length: numCourses }, () => [])
  for (const [u, v] of prerequisites) {
    indegrees[u]++
    graph[v].push(u)
  }
  const q: number[] = indegrees.reduce(
    (prev, curr, i) => {
      curr === 0 && prev.push(i)
      return prev
    },
    [],
  )

  let start = 0
  while (start < q.length) {
    const u = q[start++]
    numCourses--
    for (const v of graph[u]) {
      if (--indegrees[v] === 0)
        q.push(v)
    }
  }

  return numCourses === 0
}

canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]])
