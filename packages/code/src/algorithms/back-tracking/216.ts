export function combinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  let sum = 0

  const dfs = (begin: number) => {
    if (sum > n)
      return
    if (path.length === k) {
      sum === n && ans.push([...path])
      return
    }
    for (let i = begin; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      sum += i
      dfs(i + 1)
      sum -= i
      path.pop()
    }
  }

  dfs(1)
  return ans
}

combinationSum3(3, 9)
