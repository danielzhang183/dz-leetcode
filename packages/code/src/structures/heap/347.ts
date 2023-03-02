// sort
export function topKFrequent(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++)
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1)

  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map(i => i[0])
}
