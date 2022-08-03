/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  // const n = nums.length
  // nums[-1] = nums[n] = -Number.MAX_SAFE_INTEGER
  // let left = 0, right = n - 1, mid = 0
  // while (left < right) {
  //   mid = left + (right - left) / 2 | 0
  //   if (nums[mid] > nums[mid-1] && nums[mid] < nums[mid+1]) {
  //     left = mid + 1
  //   } else {
  //     right = mid
  //   }
  // }
  // return left

  if (nums.length == 1)
    return 0
  if (nums.length == 2)
    return nums[0] > nums[1] ? 0 : 1
  let l = 0; let r = nums.length - 1
  while (l < r) {
    const mid = (l + r) >> 1
    console.log(mid)
    if (nums[mid] < nums[mid + 1])
      l = mid + 1
    else
      r = mid
  }
  return l
}
// @lc code=end
