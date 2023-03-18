export function islandPerimeter1(grid: number[][]): number {
  let land = 0
  let cover = 0
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 1)
        continue
      land++
      if (i - 1 >= 0 && grid[i - 1][j] === 1)
        cover++
      if (j - 1 >= 0 && grid[i][j - 1] === 1)
        cover++
    }
  }

  return land * 4 - cover * 2
}

export function islandPerimeter(grid: number[][]): number {
  let count = 0
  const m = grid.length
  const n = grid[0].length
  const directX = [-1, 1, 0, 0]
  const directY = [0, 0, -1, 1]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 1)
        continue
      for (let k = 0; k < 4; k++) {
        const x = i + directX[k]
        const y = j + directY[k]
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) {
          count++
          continue
        }
      }
    }
  }

  return count
}

