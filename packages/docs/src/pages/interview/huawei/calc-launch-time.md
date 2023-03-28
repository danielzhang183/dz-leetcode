---
title: Calc Launch Time
display: Calc Launch Time
difficulty: Medium
origin: https://leetcode.cn/problems/insert-delete-getrandom-o1
company: huawei
---

[[toc]]

## Problem

已知每个服务启动都需要一定时间，且每个服务可能依赖其他的服务启动。现给定一个n * n的二维数组arr，
`arr[i][i]`表示i服务启动需要的时间，`arr[i][j]`表示i服务是否依赖j服务，如果为1表示依赖，0表示不依赖。当服务依赖的服务彼此之间没有依赖关系时，这些服务可以并行启动。

题目保证服务之间不存在循环依赖关系，求服务k（1<=k<=n）启动需要的时间。

## Examples

### Example 1

```md
Input:
arr = [
  [1, 0, 0],
  [1, 2, 0],
  [0, 1, 3]
], k = 3
Output: 6
```

### Example 2

```md
Input:
arr = [
  [1, 0, 0, 0],
  [1, 2, 0, 0],
  [1, 1, 3, 0],
  [0, 0, 1, 4]
], k = 4
Output: 10
```

### Example 3

```md
Input:
arr = [
  [1, 0, 0, 0],
  [1, 2, 0, 0],
  [1, 0, 3, 0],
  [0, 1, 1, 4]
], k = 4
Output: 8
```

**Constraints:**

- **-2<sup>31</sup> <= val <= 2<sup>31</sup> - 1**
- At most **2 *&nbsp;****10<sup>5</sup>** calls will be made to **insert**, **remove**, and **getRandom**.
- There will be **at least one** element in the data structure when **getRandom** is called.

## Solution

```ts
function calcLaunchTime(arr: number[][], k: number): number {

}
```
