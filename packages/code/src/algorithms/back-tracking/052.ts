export function totalNQueens(n: number): number {
  let ans = 0
  const bt = (row: number, columns: number[]) => {
    if (row === n) {
      ans++
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
