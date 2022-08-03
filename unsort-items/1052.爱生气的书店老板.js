/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, minutes) {
  const n = customers.length
  let total = 0
  for (let i = 0; i < n; i++) {
    if (!grumpy[i])
      total += customers[i]
  }

  let increase = 0
  for (let i = 0; i < minutes; i++)
    increase += customers[i] * grumpy[i]

  let maxIncrease = increase
  for (let i = minutes; i < n; i++) {
    increase = increase - customers[i - minutes] * grumpy[i - minutes] + customers[i] * grumpy[i]
    maxIncrease = Math.max(maxIncrease, increase)
  }
  return total + maxIncrease
}
// @lc code=end
