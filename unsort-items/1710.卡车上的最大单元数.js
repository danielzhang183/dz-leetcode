/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let i = 0; let sum = 0
  while (i < boxTypes.length && truckSize > 0) {
    sum += Math.min(boxTypes[i][0], truckSize) * boxTypes[i][1]
    truckSize -= boxTypes[i][0]
    i++
  }
  return sum
}
// @lc code=end
