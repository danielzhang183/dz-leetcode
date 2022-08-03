/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const n1 = s.length
  const n2 = t.length
  if (n1 < n2)
    return ''
  const map = new Map()
  let target = 0
  for (let i = 0; i < n2; i++) {
    const c = t[i].charCodeAt() - 64
    target += c
    if (!map.get(t[i]))
      map.set(t[i], c)
  }
  const nums = Array.from(s).map(c => map.get(c) || 0)
  let sum = 0
  let min = Number.MAX_SAFE_INTEGER
  let right = 0
  let ans = []
  for (let i = 0; i < n1; i++) {
    if (!nums[i])
      continue
    console.log(i, right, min, ans)
    sum = 0
    right = i + 1
    sum += nums[i]
    while (sum < target && right < n1)
      sum += nums[right++]

    if (sum > target)
      continue
    if (sum === target) {
      if (right - i < min) {
        min = right - i
        ans = [i, right]
      }
    }
  }
  const [begin, end] = ans
  return min === Number.MAX_SAFE_INTEGER ? '' : s.substring(begin, end)
}
// @lc code=end
