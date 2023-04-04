---
title: Calc Launch Time
display: Huawei. Calc Launch Time
difficulty: Medium
origin: https://leetcode.cn/problems/insert-delete-getrandom-o1
company: huawei
done: true
---

[[toc]]

## Problem

Each service takes a certain amount of time to start, and each service may depend on other services to start.

Given a **n * n** two-dimensional array `arr`, `arr[i][i]` indicates the time required for service i to start, `arr[i][j]` indicates whether service `i` depends on service `j`. if it is `1`, it means it depends, and if it is `0`, it means it does not.

Services can be started **in parallel** when the services they depend on have no dependencies on each other. Ensures that there is no circular dependency between services, and return `the time required for service k (1<=k<=n) to start`.

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

- **1 <= k <= n**
- there is **no circular dependency** between services.

## Solution

### DP

::: code-group

```ts [2dimen array]
function calcLaunchTime1(arr: number[][], k: number): number {
  const dp = Array.from({ length: k }, () => new Array(k).fill(0))
  dp[0][0] = arr[0][0]
  for (let i = 1; i < k; i++) {
    let max = 0
    for (let j = 0; j < i; j++) {
      if (arr[i][j] === 1)
        max = Math.max(max, dp[i - 1][j])
      dp[i][j] = dp[i - 1][j]
    }
    dp[i][i] = arr[i][i] + max
  }

  return dp[k - 1][k - 1]
}
```

```ts [scroll array]
function calcLaunchTime(arr: number[][], k: number): number {
  const dp = [arr[0][0]]
  for (let i = 1; i < k; i++) {
    let max = 0
    for (let j = 0; j < i; j++) {
      if (arr[i][j] === 1)
        max = Math.max(max, dp[j])
    }
    dp[i] = arr[i][i] + max
  }

  return dp[k - 1]
}
```

:::

### Webpack

```ts
interface Task {
  id: number // 任务id
  next: Set<number> // 下一步的任务
  cost: number // 任务的执行时间
  in: number // 有几个任务依赖它
  time: number // 任务开始时间
}
```

Implement

```ts
function calcLaunchTime(arr: number[][], k: number) {
  // 1. 生成依赖关系图
  const obj: Record<number, Task> = {}
  arr.forEach((row, i) => {
    if (i + 1 > k)
      return
    obj[i] = {
      id: i,
      next: new Set(),
      cost: row[i],
      in: 0,
      time: 0,
    }
    row.forEach((col, j) => {
      if (i !== j && col === 1) {
        obj[j].next.add(i)
        obj[i].in++
      }
    })
  })
  // 就像webpack里的文件关系，入口文件->next的关系
  // 完成的任务 用来统计时间
  const compltes: Task[] = []
  // in是0的 说明没有前置任务，可以并行启动
  while (true) {
    const ready: Task[] = []
    for (const i in obj) {
      // 入口节点可能不止一个，找到他 in是0的意思，就是没有任务的.next是他
      // 没有前置任务，直接启动
      if (obj[i].in === 0)
        ready.push(obj[i])
    }
    if (ready.length === 0)
      break // 没有可以启动的任务

    ready.forEach((task) => {
      task.next.forEach((nextTask) => {
        // 任务挨个执行
        const next = obj[nextTask]
        // next的依赖项-1 等于0的话，就可以启动了
        next.in--
        // 任务的开始时间 = max(前置任务的结束时间，当前任务的开始时间)
        next.time = Math.max(task.time + task.cost, next.time)
      })
    })
    ready.forEach((task) => {
      delete obj[task.id]
      compltes.push(task)
    })
  }

  return Math.max(...compltes.map(task => task.time + task.cost))
}
```
