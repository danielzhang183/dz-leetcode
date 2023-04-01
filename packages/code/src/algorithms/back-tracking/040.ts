export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const ans: number[][] = []
  const path: number[] = []
  const n = candidates.length
  const dfs = (begin: number, sum: number) => {
    if (sum > target)
      return
    if (sum === target) {
      ans.push([...path])
      return
    }

    for (let i = begin; i < n; i++) {
      if (i > begin && candidates[i] === candidates[i - 1])
        continue
      const candidate = candidates[i]
      path.push(candidate)
      dfs(i + 1, sum + candidate)
      path.pop()
    }
  }

  dfs(0, 0)
  return ans
}
