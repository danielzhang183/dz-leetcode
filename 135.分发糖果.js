/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  // const n = ratings.length
  // let sum = n, seq = 0
  // for (let i = 1; i < n; i++) {
  //   let prev = ratings[i-1], curr = ratings[i], next = ratings[i+1]
  //   if (curr === prev) seq = 0
  //   else if (i + 1 === n
  //     ||(curr > prev && curr > next)
  //     || (curr < prev && curr < next)
  //   ) seq = 1
  //   else seq += 1

  //   sum += seq
  // }
  // return sum
  const n = ratings.length
  let ret = 1
  let inc = 1; let dec = 0; let pre = 1

  for (let i = 1; i < n; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0
      if (ratings[i] === ratings[i - 1])
        pre = 1
      else pre++
      ret += pre
      inc = pre
    }
    else {
      dec++
      if (dec === inc)
        dec++

      ret += dec
      pre = 1
    }
  }
  return ret
}
// @lc code=end
