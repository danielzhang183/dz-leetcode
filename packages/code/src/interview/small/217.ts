// Set
export function containsDuplicate1(nums: number[]): boolean {
  const set = new Set<number>()
  for (const num of nums) {
    if (set.has(num))
      return true
    set.add(num)
  }

  return false
}

// Traversal
export function containsDuplicate2(nums: number[]): boolean {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1])
      return true
  }

  return false
}

// API
export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size < nums.length
}
