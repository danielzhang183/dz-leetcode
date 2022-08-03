/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  const ns = s.length; const nt = t.length
  let i = 0; let j = 0
  while (i < ns && j < nt) {
    while (j < nt && t[j] != s[i]) {
      j++
    }
    if (t[j] === s[i])
      i++
    j++
  }
  return i === ns
}
// @lc code=end
