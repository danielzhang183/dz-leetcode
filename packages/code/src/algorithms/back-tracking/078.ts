// N-ary Tree
export function subsets(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (nums: number[], begin: number) => {
    // console.log({ path })
    ans.push([...path])
    const len = nums.length
    if (begin === len)
      return

    for (let i = begin; i < len; i++) {
      path.push(nums[i])
      dfs(nums, i + 1)
      path.pop()
    }
  }

  dfs(nums, 0)
  return ans
}

subsets([1, 2, 3])
