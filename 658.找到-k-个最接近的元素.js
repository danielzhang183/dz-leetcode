/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
  let left = 0
  let right = arr.length - k

  while (left < right) {
    const mid = (left + right) >>> 1
    console.log(mid)
    if (x - arr[mid] > arr[mid + k] - x) {
      // 如果左边界点与x的差值 > 右边界点与x的差值 —> 向右侧靠近
      left = mid + 1
    }
    else {
      right = mid
    }
  }

  return arr.slice(left, left + k)
}
// @lc code=end
