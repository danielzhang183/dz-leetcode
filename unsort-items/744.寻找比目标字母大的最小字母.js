/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  const n = letters.length
  let l = 0; let r = n - 1; let mid
  while (l <= r) {
    mid = (l + r) >> 1
    if (letters[mid] <= target)
      l = mid + 1
    else r = mid - 1
  }
  return letters[1 % n]
}
// @lc code=end
