export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i]
    if (map.has(rest))
      return [map.get(rest)!, i]
    map.set(nums[i], i)
  }

  return []
}
