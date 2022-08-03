/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function (nums) {
  const n = nums.length
  const temp = new Array(n).fill(0)
  const tempIndex = []
  const index = []
  const ans = new Array(n).fill(0)
  for (let i = 0; i < n; i++) index[i] = i
  const mergeSort = (l, r) => {
    if (l >= r)
      return
    const mid = ((r - l) >> 1) + l
    mergeSort(l, mid)
    mergeSort(mid + 1, r)

    let i = l; let j = mid + 1; let k = l
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) {
        temp[k] = nums[i]
        tempIndex[k] = index[i]
        ans[index[i]] += (j - mid - 1)
        i++
        k++
      }
      else {
        temp[k] = nums[j]
        tempIndex[k] = index[j]
        j++
        k++
      }
    }

    while (i <= mid) {
      temp[k] = nums[i]
      tempIndex[k] = index[i]
      ans[index[i]] += (j - mid - 1)
      i++
      k++
    }
    while (j <= r) {
      temp[k] = nums[j]
      tempIndex[k] = index[j]
      j++
      k++
    }
    for (let k = l; k <= r; ++k) {
      index[k] = tempIndex[k]
      nums[k] = temp[k]
    }
  }
  mergeSort(0, n - 1)
  return ans
}
// @lc code=end
