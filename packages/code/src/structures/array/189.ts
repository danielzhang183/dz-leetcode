/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate2(nums: number[], k: number): void {
  const n = nums.length
  const arr = new Array(n)
  for (let i = 0; i < n; i++)
    arr[(i + k) % n] = nums[i]

  for (let i = 0; i < n; i++)
    nums[i] = arr[i]
}

// Reverse
export function rotate1(nums: number[], k: number): void {
  const reverse = (i: number, j: number) => {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
}

// cycle replacement
export function rotate(nums: number[], k: number): void {
  const gcd = (x, y) => y ? gcd(y, x % y) : x
  const n = nums.length
  k = k % n
  const count = gcd(k, n)
  for (let start = 0; start < count; ++start) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % n
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
    } while (start !== current)
  }
}

// const arr = [1, 2, 3, 4, 5, 6, 7]
// rotate(arr, 3) // [5, 6, 7, 1, 2, 3, 4]
// console.log(arr)
