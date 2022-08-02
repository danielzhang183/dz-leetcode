/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    let left = 0, right = n - 1, mid = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[i+1]) {
            mid = i+1
            break
        }
    }
    if (target > nums[n - 1]) {
        left = 0
        right = mid - 1
    } else {
        left = mid
        right = n - 1
    }
    while (left <= right) {
        mid = left + (right - left) / 2 | 0
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    return -1
};
// @lc code=end

