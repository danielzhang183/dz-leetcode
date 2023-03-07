export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (begin: number) => {
    ans.push([...path])

    if (begin === nums.length)
      return

    for (let i = begin; i < nums.length; i++) {
      // dimiss duplicate num (index > 1)
      // you can also use set to remove duplicate num
      if (i > begin && nums[i] === nums[i - 1])
        continue
      path.push(nums[i])
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)
  return ans
}

// subsetsWithDup([1, 2, 2])
