export function solveNQueens1(n: number): string[][] {
  const chessboard: string[][] = Array.from(
    { length: n },
    () => Array(n).fill('.'),
  )
  const ans: string[][] = []
  const isValid = (row: number, col: number): boolean => {
    // check col
    for (let i = 0; i < row; i++) {
      if (chessboard[i][col] === 'Q')
        return false
    }

    let [x, y] = [row, col]
    // check 45 degree
    while (x >= 0 && y >= 0) {
      if (chessboard[x--][y--] === 'Q')
        return false
    }

    // check 135 degree
    [x, y] = [row, col]
    while (x >= 0 && y < n) {
      if (chessboard[x--][y++] === 'Q')
        return false
    }

    return true
  }
  const bt = (row: number) => {
    if (row === n) {
      ans.push(chessboard.map(row => row.join('')))
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        chessboard[row][col] = 'Q'
        bt(row + 1)
        chessboard[row][col] = '.'
      }
    }
  }

  bt(0)
  return ans
}

export function solveNQueens(n: number): string[][] {
  const ans: string[][] = []
  const bt = (row: number, columns: number[]) => {
    if (row === n) {
      ans.push(columns.map(c => `${'.'.repeat(c)}Q${'.'.repeat(n - c - 1)}`))
      return
    }
    for (let col = 0; col < n; col++) {
      if (![...columns].some((c, r) => c === col || Math.abs(c - col) === row - r))
        bt(row + 1, [...columns, col])
    }
  }

  bt(0, [])
  return ans
}
