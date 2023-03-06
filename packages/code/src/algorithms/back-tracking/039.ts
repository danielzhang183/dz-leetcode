// N-ary Tree
export function combinationSum1(candidates: number[], target: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  candidates.sort()

  const dfs = (
    candidates: number[],
    target: number,
    sum: number,
    begin: number, // start Index
  ) => {
    if (sum > target)
      return
    if (sum === target) {
      ans.push([...path])
      return
    }

    for (let i = begin, len = candidates.length; i < len; i++) {
      const candidate = candidates[i]
      path.push(candidate)
      dfs(candidates, target, sum + candidate, i)
      path.pop()
    }
  }

  dfs(candidates, target, 0, 0)
  return ans
}

// Choose Tree
export function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = []
  candidates.sort()

  const dfs = (combine: number[], target: number, begin: number) => {
    if (begin === candidates.length)
      return

    if (target === 0) {
      ans.push([...combine])
      return
    }

    if (target - candidates[begin] >= 0)
      dfs([...combine, candidates[begin]], target - candidates[begin], begin)
    dfs(combine, target, begin + 1)
  }

  dfs([], target, 0)
  return ans
}
