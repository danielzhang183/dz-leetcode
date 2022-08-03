/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let pm = m - 1
  let pn = n - 1
  let tail = m + n - 1
  let cur
  while (pm >= 0 || pn >= 0) {
    if (pm === -1)
      cur = nums2[pn--]
    else if (pn === -1)
      cur = nums1[pm--]
    else if (nums1[pm] > nums2[pn])
      cur = nums1[pm--]
    else
      cur = nums2[pn--]

    nums1[tail--] = cur
  }
}
// @lc code=end
