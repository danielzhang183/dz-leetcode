/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1])
  const n = points.length
  // let right = points[0][1]
  // let count = 1
  // for (let i = 1; i < n; i++) {
  //   if (points[i][0] > right) {
  //     count++
  //     right = points[i][1]
  //   }
  // }
  let i = 0
  let count = 0
  while (i < n) {
    const right = points[i][1]
    i++
    while (i < n && points[i][0] <= right) i++
    count++
  }
  return count
}
// @lc code=end
