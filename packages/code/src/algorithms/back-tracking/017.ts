export function letterCombinations(digits: string): string[] {
  if (digits === '')
    return []

  const map = new Map<number, string>([
    [2, 'abc'],
    [3, 'def'],
    [4, 'ghi'],
    [5, 'jkl'],
    [6, 'mno'],
    [7, 'pqrs'],
    [8, 'tuv'],
    [9, 'wxyz'],
  ])

  const ans: string[] = []
  const path: string[] = []

  const dfs = () => {

  }

  dfs()
  return ans
}
