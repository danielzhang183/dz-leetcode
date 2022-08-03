/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  // I failed, but i will come back!!!!
  // if (amount === 0) return 0
  // coins.sort((a, b) => b - a)
  // const n = coins.length
  // let left = amount
  // let count = 0
  // for (let i = 0; i < n; i++) {
  //   if (left < coins[i] && i < n) continue
  //   if (left % coins[i] !== left) {
  //     count += Math.floor(left / coins[i])
  //     left = left % coins[i]
  //   }
  // }

  // return left === 0 ? count : -1
}
// @lc code=end
