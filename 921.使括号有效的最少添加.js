/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
  const stack = []
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(')
      stack.push(s[i])
    else if (stack.pop() !== '(')
      count++
  }
  return count + stack.length
}
// @lc code=end
