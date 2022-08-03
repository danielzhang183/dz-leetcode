/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = function (s) {
  if (!s)
    return ''
  const n = s.length
  let l = 0; let r = n - 1
  const str = Array.from(s)
  while (l < r) {
    if (!isValid(str[l])) {
      l++
      continue
    }
    if (!isValid(str[r])) {
      r--
      continue
    }
    const tmp = str[l]
    str[l] = str[r]
    str[r] = tmp
    l++
    r--
  }
  return str.join('')
}

var isValid = (c) => {
  return /[a-zA-Z]/.test(c)
}
// @lc code=end
