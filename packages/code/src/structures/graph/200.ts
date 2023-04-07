// DFS
export function numIslands1(grid: string[][]): number {
  const nr = grid.length
  const nc = grid[0].length

  const dfs = (r: number, c: number) => {
    if (
      r < 0
      || c < 0
      || r >= nr
      || c >= nc
      || grid[r][c] === '0'
    )
      return

    grid[r][c] = '0'
    dfs(r - 1, c)
    dfs(r + 1, c)
    dfs(r, c - 1)
    dfs(r, c + 1)
  }

  let ans = 0
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        ans++
        dfs(r, c)
      }
    }
  }
  return ans
}

// BFS
export function numIslands(grid: string[][]): number {
  const nr = grid.length
  const nc = grid[0].length
  const bfs = (r: number, c: number) => {
    const q = [[r, c]]
    let start = 0
    while (start < q.length) {
      const [r, c] = q[start++]
      ;[
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
      ].forEach(([r, c]) => {
        if (r >= 0
          && c >= 0
          && r < nr
          && c < nc
          && grid[r][c] === '1'
        ) {
          grid[r][c] = '0'
          q.push([r, c])
        }
      })
    }
  }

  let ans = 0
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        ans++
        bfs(r, c)
      }
    }
  }

  return ans
}

// // UnionFind
// export function numIslands2(grid: string[][]): number {

// }
