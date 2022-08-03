/*
 * @lc app=leetcode.cn id=1567 lang=javascript
 *
 * [1567] 乘积为正数的最长子数组长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
  // const n = nums.length
  // const dp = new Array(n).fill(0)
  // let max = 0
  // for (let i = 0 i < n i++) {
  //   let multi = 1
  //   for (let j = i j < n j++) {
  //     multi *= nums[j]
  //     if (multi > 0) dp[i] = j - i + 1
  //     else if (multi === 0) break
  //   }
  //   max = Math.max(max, dp[i])
  // }
  // return max

  // const length = nums.length
  // const positive = new Array(length).fill(0)
  // const negative = new Array(length).fill(0)
  // if (nums[0] > 0) positive[0] = 1
  // else if (nums[0] < 0) negative[0] = 1
  // let maxLength = positive[0]
  // for (let i = 1 i < length i++) {
  //   if (nums[i] > 0) {
  //     positive[i] = positive[i - 1] + 1
  //     negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
  //   } else if (nums[i] < 0) {
  //     positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
  //     negative[i] = positive[i - 1] + 1
  //   } else {
  //     positive[i] = 0
  //     negative[i] = 0
  //   }
  //   maxLength = Math.max(maxLength, positive[i])
  // }
  // return maxLength

  // 滚动数组（空间）优化
  const length = nums.length
  let positive = nums[0] > 0 ? 1 : 0
  let negative = nums[0] < 0 ? 1 : 0
  let maxLength = positive
  for (let i = 1; i < length; i++) {
    if (nums[i] > 0) {
      positive++
      negative = negative > 0 ? negative + 1 : 0
    }
    else if (nums[i] < 0) {
      const newPositive = negative > 0 ? negative + 1 : 0
      const newNegative = positive + 1
      positive = newPositive
      negative = newNegative
    }
    else {
      positive = 0
      negative = 0
    }
    maxLength = Math.max(maxLength, positive)
  }
  return maxLength
}
// @lc code=end
