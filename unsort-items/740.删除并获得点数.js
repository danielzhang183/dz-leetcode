/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var deleteAndEarn = function(nums) {
//   const n = nums.length
//   nums = nums.sort((a, b) => a - b)
//   const dp = [nums[0]]
//   let max = nums[0]
//   for (let i = 1; i < n; i++) {
//     dp[i] = nums[i]
//     for (let j = 0; j < i; j++) {
//       if (nums[i] !== nums[j] + 1) {
//         dp[i] = Math.max(dp[i], nums[i] + dp[j])
//       }
//     }
//     max = Math.max(max, dp[i])
//   }
//   return max
// };
const rob = (nums) => {
  const size = nums.length
  let first = nums[0]; let second = Math.max(nums[0], nums[1])
  for (let i = 2; i < size; i++) {
    const temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }
  return second
}

const deleteAndEarn = function (nums) {
  const maxVal = Math.max(...nums)
  const sum = new Array(maxVal + 1).fill(0)
  for (const val of nums)
    sum[val] += val

  return rob(sum)
}
// @lc code=end
