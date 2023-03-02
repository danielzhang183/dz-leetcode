---
title: Quick Sort
description: Sort
date: 2022-11-02T16:00:00.000+00:00
type: Sort
lang: en
duration: 5min
---

[[toc]]

## Implement

```ts
const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort(arr: number[], l: number, r: number): number {
  const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, randomIndex, r)

  let i = l;
  let j = r
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) j--
    while (i < j && arr[i] <= arr[l]) i++
    if (i !== j)
      swap(arr, i, j)
  }
  swap(arr, i, l)

  return i
}
```

## Related Question

- [Kth Largest Element in an Array](/structures/heap/215)
