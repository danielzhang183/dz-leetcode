/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const n = s.length
  for (let i = 0; i < n / 2; i++) {
    const tmp = s[i]
    s[i] = s[n - i - 1]
    s[n - i - 1] = tmp
  }
}
// @lc code=end
