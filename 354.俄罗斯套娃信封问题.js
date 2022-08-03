/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function (envelopes) {
  envelopes = envelopes
    .sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]))
    .flatMap(o => o[1])
  return lengthOfLIS(envelopes)
}

var lengthOfLIS = function (nums) { // 二分 + 贪心
  let len = 1
  const n = nums.length
  if (n == 0)
    return 0
  const d = new Array(n + 1).fill(1)
  d[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i]
    }
    else {
      let l = 1; let r = len; let pos = 0; let mid // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        mid = (l + r) >> 1
        if (d[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        }
        else {
          r = mid - 1
        }
      }
      d[pos + 1] = nums[i]
    }
  }
  return len
}
// @lc code=end
