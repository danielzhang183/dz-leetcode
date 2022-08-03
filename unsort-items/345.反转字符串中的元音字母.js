/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
const isValid = function (c) {
  return ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].includes(c)
}

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  if (!s)
    return s
  let left = 0; let right = s.length - 1
  const ret = s.split('')
  while (left < right) {
    if (!isValid(ret[left])) {
      left++
      continue
    }
    if (!isValid(ret[right])) {
      right--
      continue
    }
    const tmp = ret[left]
    ret[left++] = ret[right]
    ret[right--] = tmp
  }
  return ret.join('')
}
// @lc code=end
