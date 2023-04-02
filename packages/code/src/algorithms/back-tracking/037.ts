/* eslint-disable no-unmodified-loop-condition */
/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku1(board: string[][]): string[][] {
  const line = Array.from({ length: 9 }, () => new Array(9).fill(false))
  const column = Array.from({ length: 9 }, () => new Array(9).fill(false))
  const block = Array.from(
    { length: 3 },
    () => Array.from({ length: 3 }, () => new Array(9).fill(false)),
  )
  const spaces: number[][] = []
  let valid = false

  const setDigit = (i: number, j: number, digit: number, bool: boolean) => {
    line[i][digit]
          = column[j][digit]
           = block[Math.floor(i / 3)][Math.floor(j / 3)][digit]
            = bool
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        spaces.push([i, j])
      }
      else {
        const digit = Number(board[i][j]) - 1
        setDigit(i, j, digit, true)
      }
    }
  }

  const dfs = (pos: number) => {
    if (pos === spaces.length) {
      valid = true
      return
    }

    const [i, j] = spaces[pos]
    for (let digit = 0; digit < 9 && !valid; digit++) {
      if (!line[i][digit]
          && !column[j][digit]
            && !block[Math.floor(i / 3)][Math.floor(j / 3)][digit]
      ) {
        setDigit(i, j, digit, true)
        board[i][j] = String(digit + 1)
        dfs(pos + 1)
        setDigit(i, j, digit, false)
      }
    }
  }

  dfs(0)
  return board
}

export function solveSudoku(board: string[][]): string[][] {
  const line = new Array(9).fill(0)
  const column = new Array(9).fill(0)
  const block = Array.from(
    { length: 3 },
    () => new Array(3).fill(0),
  )
  const spaces: number[][] = []
  let valid = false

  const flip = (i: number, j: number, digit: number) => {
    line[i]
          = column[j]
           = block[Math.floor(i / 3)][Math.floor(j / 3)]
            ^= (1 << digit)
  }

  const bitCount = (n: number) => {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        spaces.push([i, j])
      }
      else {
        const digit = Number(board[i][j]) - 1
        flip(i, j, digit)
      }
    }
  }

  const dfs = (pos: number) => {
    if (pos === spaces.length) {
      valid = true
      return
    }

    const [i, j] = spaces[pos]
    let mask = ~(line[i] | column[j] | block[Math.floor(i / 3)][Math.floor(j / 3)]) & 0xFF
    for (; mask !== 0 && !valid; mask &= (mask - 1)) {
      const digitMask = mask & (-mask)
      const digit = bitCount(digitMask - 1)
      flip(i, j, digit)
      board[i][j] = String(digit + 1)
      dfs(pos + 1)
      flip(i, j, digit)
    }
  }

  dfs(0)
  return board
}

