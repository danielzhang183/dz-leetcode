/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  // 贪心
  // const n = nums.length
  // if (n === 1) return 1
  // let start = 1
  // while(start < n && nums[start] === nums[0]) start++
  // if (start === n) return 1
  // let prev = nums[start] - nums[0], count = 2
  // for (let i = start + 1; i < n; i++) {
  //   if ((prev > 0 && nums[i] >= nums[i - 1])
  //     || (prev < 0 && nums[i] <= nums[i - 1])) continue
  //   prev = -prev
  //   count++
  // }
  // return count

  // 动态规划
  // 动态规划中子序列问题的经典题目：本质上是最长子序列，是最长子序列的进阶题目
  // 由于有两种状态：上升和下降，因此需要定义两种状态(题做多了就会了)
  // 状态定义：
  // up[i]表示最后一个元素i是上升的(或者是以i结尾的元素)，它最终整条数组最长的上升子序列的长度为up[i]
  // down[i]表示最后一个元素是i是下降的(或者是以i结尾的元素)，它最终整条数组最长的下降子序列的长度为down[i]

  // 状态条件：nums[i]>=nums[i-1]或者nums[i]<nums[i-1]

  // 状态转移方程：
  // 1. 如果nums[i] > nums[i-1], up[i] = down[i-1] + 1; down[i] = down[i-1]
  // 2. 如果nums[i] < nums[i-1], down[i] = up[i-1] + 1; up[i] = up[i-1]
  // 3. 如果nums[i] === nums[i-1], up[i] = up[i-1];down[i] = down[i-1]

  const n = nums.length
  const up = new Array(n).fill(1)
  const down = new Array(n).fill(1)
  // i=0时，都是等于1
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1
      down[i] = down[i - 1]
    }
    else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1
      up[i] = up[i - 1]
    }
    else {
      up[i] = up[i - 1]
      down[i] = down[i - 1]
    }
    console.log(JSON.stringify(up), JSON.stringify(down))
  }

  return Math.max(up[n - 1], down[n - 1])
}
// @lc code=end
