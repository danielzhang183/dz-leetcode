/*
 * @lc app=leetcode.cn id=1400 lang=javascript
 *
 * [1400] 构造 K 个回文字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function (s, k) {
  const n = s.length
  if (!s || n < k)
    return false
  if (n === k)
    return true
  // const map = [...s].reduce((prev, curr) => {
  //   prev[curr] = (prev[curr] || 0)+1
  //   return prev
  // }, {})
  // let single = 0
  // Object.values(map).forEach((c) => c%2 !==0 && single++)
  // return single <= k
  const arr = new Array(26).fill(0)
  for (const c of s) arr[c.charCodeAt() - 97]++
  return arr.reduce((prev, curr) => prev + (curr & 1), 0) <= k
}
// @lc code=end
