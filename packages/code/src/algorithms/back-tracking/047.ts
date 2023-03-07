export function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  const used: boolean[] = new Array(nums.length).fill(false)
  nums.sort()

  const dfs = () => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i - 1] === nums[i]) && used[i - 1])
        continue

      if (!used[i]) {
        path.push(nums[i])
        used[i] = true
        dfs()
        path.pop()
        used[i] = false
      }
    }
  }

  dfs()
  // console.log({ ans })
  return ans
}

permuteUnique([3, 3, 0, 3])
