// two-pointers
// export function removeDuplicates(nums: number[]): number {
//   const len = nums.length
//   if (len === 1)
//     return 1

//   let j = 1
//   for (let i = 1; i < len; i++) {
//     if (nums[i] !== nums[j - 1])
//       nums[j++] = nums[i]
//   }

//   return j
// }

// array apis
export function removeDuplicates(nums: number[]): number {
  const newArray = [...new Set(nums)]
  nums.splice(0, newArray.length, ...newArray)
  return newArray.length
}
