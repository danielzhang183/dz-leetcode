import { Queue } from './../../utils/queue'
// Stack
export function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
  const [n1, n2] = [nums1.length, nums2.length]
  const ans: number[] = new Array(n1).fill(-1)
  const stack: number[] = []
  const map = new Map<number, number>(nums1.map((num, i) => ([num, i])))
  for (let i = 0; i < n2; i++) {
    let top = stack[stack.length - 1]
    while (stack.length && nums2[i] > nums2[top]) {
      const index = map.get(nums2[top])
      if (index !== undefined)
        ans[index] = nums2[i]
      stack.pop()
      top = stack[stack.length - 1]
    }

    if (map.get(nums2[i]) !== undefined)
      stack.push(i)
  }

  return ans
}

export function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
  const n2 = nums2.length
  const map = new Map()
  const stack: number[] = []

  for (let i = n2 - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length > 0 && num >= stack[stack.length - 1])
      stack.pop()

    map.set(num, stack.length === 0 ? -1 : stack[stack.length - 1])
    stack.push(num)
  }

  return nums1.map(num => map.get(num))
}

// Queue
export function nextGreaterElement3(nums1: number[], nums2: number[]): number[] {
  const [n1, n2] = [nums1.length, nums2.length]
  const ans: number[] = new Array(n1).fill(-1)
  const q = new Queue<number>()
  const map = new Map<number, number>(nums1.map((num, i) => [num, i]))

  for (let i = 0; i < n2; i++) {
    while (!q.isEmpty() && nums2[i] > nums2[q.top()!]) {
      const index = map.get(nums2[q.top()!])
      if (index !== undefined)
        ans[index] = nums2[i]
      q.dequeue()
    }
    if (map.get(nums2[i]) !== undefined)
      q.enqueue(i)
  }

  return ans
}

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const n2 = nums2.length
  const map = new Map()
  const q = new Queue<number>()

  for (let i = n2 - 1; i >= 0; i--) {
    const num = nums2[i]
    while (!q.isEmpty() && num >= q.top()!)
      q.dequeue()

    map.set(num, q.isEmpty() ? -1 : q.top())
    q.enqueue(num)
  }

  return nums1.map(num => map.get(num))
}
