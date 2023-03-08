// Set
export function intersection1(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums2)
  return [...new Set(nums1)].filter(i => set.has(i))
}

// Sort + Two Pointers
export function intersection(nums1: number[], nums2: number[]): number[] {
  const arr1 = [...new Set(nums1)].sort()
  const arr2 = [...new Set(nums2)].sort()
  const ans: number[] = []

  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      ans.push(arr1[i])
      i++
      j++
    }
    else if (arr1[i] < arr2[j]) {
      i++
    }
    else {
      j++
    }
  }

  return ans
}

intersection([4, 9, 5], [9, 4, 9, 8, 4])
