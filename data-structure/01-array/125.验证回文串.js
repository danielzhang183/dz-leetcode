/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (!s)
    return false
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const n = s.length
  for (let i = 0; i < n / 2; i++) {
    if (s[i] === s[n - 1 - i])
      continue
    else return false
  }
  return true
}
// @lc code=end
