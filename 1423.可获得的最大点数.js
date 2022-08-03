/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  const n = cardPoints.length
  let sum = 0
  for (let i = n - k; i < n; i++)
    sum += cardPoints[i]

  let max = sum
  for (let i = n; i < n + k; i++) {
    sum -= cardPoints[i - k]
    sum += cardPoints[i % n]
    max = Math.max(max, sum)
  }

  return max
}
// @lc code=end
