/*
 * @lc app=leetcode.cn id=629 lang=javascript
 *
 * [629] K个逆序对数组
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = function (n, k) {
  const temp = new Array(n).fill(0)
  const count = 0
  mergeSort(nums, 0, nums.length - 1, temp)
}

var mergeSort = function (nums, left, right, temp) {
  if (left === right)
    return
  const mid = left + ((right - left) >> 1)
  // 拆分
  mergeSort(nums, left, mid, temp)
  mergeSort(nums, mid + 1, right, temp)
  // 归并
  mergeTwoArray(nums, left, mid, right, temp)
}

var mergeTwoArray = function (nums, left, mid, right, temp) {
  for (let i = left; i <= right; i++)
    temp[i] = nums[i]

  let i = left; let j = mid + 1; let k = left
  while (i <= mid && j <= right) {
    if (temp[i] <= temp[j])
      nums[k++] = temp[i++]
    else nums[k++] = temp[j++]
  }
  while (i <= mid)
    nums[k++] = temp[i++]

  while (j <= right)
    nums[k++] = temp[j++]
}
// @lc code=end
