// partition + map
export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map()
  nums1.forEach(i => nums2.forEach(j => map.set(i + j, (map.get(i + j) || 0) + 1)))
  let ans = 0
  for (let i of nums3) {
    for (const j of nums4) {
      if (map.has(-i - j))
        ans += map.get(-i - j)
    }
  }

  return ans
}
