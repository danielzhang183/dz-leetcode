export function exist1(board: string[][], word: string): boolean {
  const row = board.length
  const col = board[0].length
  const visited = Array.from({ length: row }, () => Array(col).fill(false))
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let ans = false

  const dfs = (i: number, j: number, k: number) => {
    if (board[i][j] !== word[k])
      return false
    else if (k === word.length - 1)
      return true

    visited[i][j] = true
    for (const [dx, dy] of directions) {
      const [x, y] = [i + dx, j + dy]
      if (x >= 0 && x < row && y >= 0 && y < col) {
        if (!visited[x][y]) {
          ans = dfs(x, y, k + 1)
          if (ans)
            break
        }
      }
    }
    visited[i][j] = false
    return ans
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans = dfs(i, j, 0)
      if (ans)
        return true
    }
  }

  return false
}

export function exist(board: string[][], word: string): boolean {
  const row = board.length
  const col = board[0].length
  const len = word.length
  let ans = false
  const dfs = (i: number, j: number, k: number) => {
    if ((board[i] || [])[j] !== word[k])
      return false
    else if (k === len - 1)
      return true

    board[i][j] = ''
    ans = dfs(i - 1, j, k + 1)
      || dfs(i + 1, j, k + 1)
      || dfs(i, j - 1, k + 1)
      || dfs(i, j + 1, k + 1)
    if (!ans)
      board[i][j] = word[k]
    return ans
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans = dfs(i, j, 0)
      if (ans)
        return true
    }
  }

  return false
}
