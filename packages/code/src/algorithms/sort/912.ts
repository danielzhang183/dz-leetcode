// Quick Sort
export function sortArray(nums: number[]): number[] {
  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  const partition = (l: number, r: number) => {
    // const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l
    // swap(nums, randomIndex, r)

    let i = l
    let j = r
    while (i < j) {
      while (i < j && nums[j] >= nums[l]) j--
      while (i < j && nums[i] <= nums[l]) i++
      if (i !== j)
        swap(nums, i, j)
    }
    swap(nums, i, l)
    return i + 1
  }

  const quickSort = (l: number, r: number) => {
    if (l < r) {
      const pos = partition(l, r)
      quickSort(l, pos - 1)
      quickSort(pos, r)
    }
  }

  quickSort(0, nums.length - 1)
  return nums
}
