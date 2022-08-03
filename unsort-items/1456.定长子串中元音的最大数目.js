/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  if (!s)
    return 0
  s = s.toLowerCase()
  let count = 0
  for (let i = 0; i < k; i++)
    count += isValid(s[i])

  let max = count
  for (let i = k; i < s.length; i++) {
    count -= isValid(s[i - k])
    count += isValid(s[i])
    max = Math.max(max, count)
  }
  return max
}

var isValid = function (c) {
  return ['a', 'e', 'i', 'o', 'u'].includes(c) ? 1 : 0
}
// @lc code=end
