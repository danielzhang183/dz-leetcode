export function letterCombinations(digits: string): string[] {
  if (digits === '')
    return []

  const phoneMap = new Map<string, string>([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ])
  const ans: string[] = []
  const path: string[] = []

  const dfs = (digits: string, begin: number) => {
    if (path.length === digits.length) {
      ans.push(path.join(''))
      return
    }

    const tmp = phoneMap.get(digits.charAt(begin))!
    const len = tmp.length
    for (let i = 0; i < len; i++) {
      path.push(tmp.charAt(i))
      dfs(digits, begin + 1)
      path.pop()
    }
  }

  dfs(digits, 0)
  return ans
}

letterCombinations('23')
