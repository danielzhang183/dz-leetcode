/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  const map = {
    5: 0,
    10: 0,
  }
  for (const bill of bills) {
    if (bill === 5) { map[5]++ }
    else if (bill === 10) {
      if (map[5] === 0)
        return false
      map[5]--
      map[10]++
    }
    else {
      if (map[5] && map[10]) {
        map[5]--
        map[10]--
      }
      else if (map[5] >= 3) {
        map[5] -= 3
      }
      else {
        return false
      }
    }
  }
  return true
}
// @lc code=end
