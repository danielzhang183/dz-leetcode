/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  // nums1 = nums1.sort((a, b) => a - b)
  // nums2 = nums2.sort((a, b) => a - b)
  // let ret = []
  // for (let k = 0; k < nums1.length; k++) {
  //   if (k > 0 && nums1[k] === nums1[k - 1]) continue
  //   let l = 0, r = nums2.length - 1, mid
  //   while (l <= r) {
  //     mid = (l + r) >> 1
  //     console.log(mid, nums2[mid], nums1[k])
  //     if (nums1[k] === nums2[mid]) {
  //       ret.push(nums1[k])
  //       break
  //     }
  //     else if (nums1[k] > nums2[mid]) l = mid + 1
  //     else r = mid - 1
  //   }
  // }
  // return ret
  const set2 = new Set(nums2)
  return [...new Set(nums1)].filter(num => set2.has(num))
}
// @lc code=end
