/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  const n = people.length
  people = people.sort((a, b) => a - b)
  let count = 0; let i = 0; let j = n - 1
  while (i <= j) {
    if (people[i] + people[j] <= limit)
      i++
    j--
    count++
  }
  return count
}
// @lc code=end
