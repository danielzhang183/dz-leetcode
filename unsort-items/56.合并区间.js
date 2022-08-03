/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const n = intervals.length; const ret = [intervals[0]]
  for (let i = 1; i < n; i++) {
    const rightmost = ret[ret.length - 1][1]
    if (rightmost < intervals[i][0])
      ret.push(intervals[i])
    else
      ret[ret.length - 1][1] = Math.max(rightmost, intervals[i][1])

    // if (intervals[i][0] <= right) {
    //   let [start, end] = ret.pop()
    //   end = Math.max(end, intervals[i][1])
    //   ret.push([start, end])
    //   right = end
    // } else {
    //   ret.push(intervals[i])
    //   right = intervals[i][1]
    // }
  }
  return ret
}
// @lc code=end
