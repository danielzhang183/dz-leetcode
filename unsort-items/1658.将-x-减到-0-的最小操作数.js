/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  // const n = nums.length
  // const lA = new Map
  // let ret = 100001,
  // sum = 0
  // for (let i = 0 i < n i++) {
  //     sum += nums[i]
  //     lA.set(sum, i)

  //     if(sum > x) break
  //     if(sum === x) {
  //       ret = Math.min(ret, i + 1)
  //       break
  //     }
  // }
  // sum = 0
  // for (let i = n-1 i >= 0 i--) {
  //   sum += nums[i]

  //   const leftSIndex = lA.get(x - sum)
  //   if(leftSIndex != void 0 && i > leftSIndex) {
  //     ret = Math.min(ret, leftSIndex + 1 + n - i)
  //   }

  //   if(sum > x) break
  //   if(sum === x) {
  //     ret = Math.min(ret, n - i)
  //     break
  //   }
  // }

  // return ret === 100001 ? -1 : ret

  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum === x)
    return nums.length
  const target = sum - x
  let left = 0
  let right = 0
  let max = 0
  let temp = 0
  while (right < nums.length) {
    temp += nums[right]
    while (left <= right && temp > target)
      temp -= nums[left++]

    if (temp === target)
      max = Math.max(right - left + 1, max)
    right++
  }
  return max === 0 ? -1 : nums.length - max
}
// @lc code=end
