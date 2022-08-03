/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const n = nums.length
  const temp = new Array(n).fill(0)
  // 归并排序
  // mergeSort(nums, 0, n-1, temp, 0)
  // 快速排序
  quickSort(nums, 0, n - 1, 0)
  return nums
}

// 归并排序
const mergeSort = (nums, left, right, temp, level) => {
  log('拆分子问题', left, right, level)
  if (left === right) {
    log('解决子问题1', left, right, level)
    return
  }
  const mid = left + ((right - left) >> 1)
  mergeSort(nums, left, mid, temp, level + 1)
  mergeSort(nums, mid + 1, right, temp, level + 1)

  for (let i = left; i <= right; i++)
    temp[i] = nums[i]

  let i = left
  let j = mid + 1
  let k = left
  while (i <= mid && j <= right) {
    // 注意写成 < 就丢失了稳定性（相同元素原来靠前的排序以后依然靠前）
    if (temp[i] <= temp[j])
      nums[k++] = temp[i++]
    else nums[k++] = temp[j++]
  }

  while (i <= mid) nums[k++] = temp[i++]
  while (j <= right) nums[k++] = temp[j++]
  log('解决子问题2', left, right, level)
}

// 快速排序
/**
 * 对数组的子区间 nums[left..right] 排序
 */
var quickSort = function (nums, left, right, recursionLevel) {
  log('拆分子问题', left, right, recursionLevel)
  // 1. 递归终止条件
  if (left >= right) {
    log('递归到底', left, right, recursionLevel)
    return
  }

  const pIndex = partition(nums, left, right)
  // 2. 拆分，对应「分而治之」算法的「分」
  quickSort(nums, left, pIndex - 1)
  quickSort(nums, pIndex + 1, right)
  // 3. 递归完成以后没有「合」的操作，这是由「快速排序」partition 的逻辑决定的
}

/**
 * 将数组 nums[left..right] 分区，返回下标 pivot，
 * 且满足 [left + 1..lt) <= pivot，(gt, right] >= pivot
 */
var partition = function (nums, left, right) {
  const randomIndex = Math.floor(Math.random() * (right - left)) + left
  swap(nums, randomIndex, left)

  // let pivot = nums[left], lt = left + 1, gt = right
  // while (true) {
  //   while (lt <= right && nums[lt] < pivot) lt++;
  //   while (gt > left && nums[gt] > pivot) gt--;
  //   if (lt >= gt) break
  //   // 细节：相等的元素通过交换，等概率分到数组的两边
  //   swap(nums, lt, gt)
  //   lt++
  //   gt--
  // }
  // swap(nums, left, gt)
  // return gt
  let i = left; let j = right
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) j--
    while (i < j && nums[i] <= nums[left]) i++
    if (i !== j)
      swap(nums, i, j)
  }
  swap(nums, left, right)
  return left
}

var swap = function (nums, index1, index2) {
  const temp = nums[index1]
  nums[index1] = nums[index2]
  nums[index2] = temp
}

var log = function (log, left, right, level) {
  console.log(`${'    '.repeat(level)}${log} => [${left}, ${right}]`)
}
// @lc code=end
