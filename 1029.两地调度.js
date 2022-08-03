/*
 * @lc app=leetcode.cn id=1029 lang=javascript
 *
 * [1029] 两地调度
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  // costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))
  // const n = costs.length
  // let a = 0, b = 0, sum = 0
  // for (let i = 0; i < n; i++) {
  //   if (a < n/2 && b < n/2) {
  //     if (costs[i][0] > costs[i][1]) {
  //       b++
  //       sum += costs[i][1]
  //     } else {
  //       a++
  //       sum += costs[i][0]
  //     }
  //   } else {
  //     sum += a > b ? costs[i][1] : costs[i][0]
  //   }
  // }
  // return sum

  let res = 0
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2)
      res += costs[i][0]
    else
      res += costs[i][1]
  }
  return res
}
// @lc code=end
