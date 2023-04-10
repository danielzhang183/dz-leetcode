// Sort `O(N * logN) O(N)`
export function smallerNumbersThanCurrent1(nums: number[]): number[] {
  const n = nums.length
  const arr: number[][] = nums.map((n, i) => [n, i])
  arr.sort((a, b) => a[0] - b[0])

  const ans: number[] = new Array(n).fill(0)
  let prev = -1
  for (let i = 0; i < n; i++) {
    if (prev === -1 || arr[i][0] !== arr[i - 1][0])
      prev = i
    ans[arr[i][1]] = prev
  }

  return ans
}

// Count Sort O(N + K) O(K)
export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length
  const arr = new Array(101).fill(0)
  for (let i = 0; i < n; i++)
    arr[nums[i]] += 1

  for (let i = 1; i <= 100; i++)
    arr[i] += arr[i - 1]

  const ans: number[] = []
  for (let i = 0; i < n; i++)
    ans.push(nums[i] ? arr[nums[i] - 1] : 0)

  return ans
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3]) // [4, 0, 1, 1, 3]
