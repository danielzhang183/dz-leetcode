export function permute(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  const set = new Set<number>()

  const dfs = () => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i]))
        continue
      set.add(nums[i])
      path.push(nums[i])
      dfs()
      path.pop()
      set.delete(nums[i])
    }
  }

  dfs()
  return ans
}

permute([1, 2, 3])
