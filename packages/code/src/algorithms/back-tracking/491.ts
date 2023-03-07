export function findSubsequences(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (begin: number) => {
    if (path.length > 1) {
      // console.log({ path })
      ans.push([...path])
    }

    const set = new Set<number>()
    for (let i = begin; i < nums.length; i++) {
      if ((path.length && nums[i] < path[path.length - 1]) || set.has(nums[i]))
        continue

      set.add(nums[i])
      path.push(nums[i])
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)
  // console.log({ ans })
  return ans
}

findSubsequences([4, 6, 7, 7])
