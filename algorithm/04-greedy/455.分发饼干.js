/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const ng = g.length
  const ns = s.length
  let count = 0
  for (let i = 0, j = 0; i < ng && j < ns; i++, j++) {
    while (j < ns && g[i] > s[j]) {
      j++
    }
    if (j < ns) {
      count++
    }
  }
  return count
}
// @lc code=end
