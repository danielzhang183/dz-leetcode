/*
 * @lc app=leetcode.cn id=1247 lang=javascript
 *
 * [1247] 交换字符使得字符串相同
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumSwap = function (s1, s2) {
  const n1 = s1.length
  const n2 = s2.length
  let x = 0; let y = 0
  if (!n1 || !n2 || n1 !== n2)
    return -1
  for (let i = 0; i < n1; i++) {
    if (s1[i] != s2[i])
      s1[i] === 'x' ? x++ : y++
  }
  return (x + y) % 2 ? -1 : (Math.ceil(x / 2) + Math.ceil(y / 2))
}
// @lc code=end
