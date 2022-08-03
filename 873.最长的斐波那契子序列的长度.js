/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
const lenLongestFibSubseq = function (arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++)
    map.set(arr[i], i)

  let max = 0
  const dp = Array.from({ length: arr.length }, () => new Array(arr.length).fill(2))
  console.log(dp)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const f2 = arr[i]
      const f3 = arr[j]
      const f1 = f3 - f2
      if (f1 < f2 && map.has(f1)) {
        dp[i][j] = Math.max(dp[map.get(f1)][i] + 1, dp[i][j])
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max
}
// @lc code=end
