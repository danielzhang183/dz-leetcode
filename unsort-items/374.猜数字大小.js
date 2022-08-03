/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 1; let right = n
  while (left < right) {
    const mid = left + (right - left) / 2 | 0
    // @ts-expect-error
    if (guess(mid) <= 0)
      right = mid
    else left = mid + 1
  }
  return left
}
// @lc code=end
