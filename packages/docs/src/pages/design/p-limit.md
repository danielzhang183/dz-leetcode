---
title: Limit promise concurrency using queue
description: Run multiple async functions with limited concurrency
date: 2022-11-01T16:00:00.000+00:00
lang: en
duration: 10min
---

[[toc]]

> Run multiple promise-returning & async functions with limited concurrency

## How it works?

## APIs

* `pLimit(concurrency)` return `limit` function
* `limit(fn, ...args)`
  * `fn` Promise-returning/async function.
  * `args` Any arguments to pass through to fn.
* property `activeCount` the number of promises that are currently running.
* property `pendingCount` the number of promises that are waiting to run.
* `reset()` discard pending promises that are waiting to run.

## Usage

```ts
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve, ms))
}

function fetchSomething(input: string) {
  input === 'foo' ? sleep(2000) : sleep(100)
  return input
}

const limit = pLimit(1)
console.log(limit.activeCount) // 0
console.log(limit.pendingCount) // 0
// Only one promise is run at once
const promises = ['foo', 'bar']
  .map(i => limit(input => fetchSomething(input), i))
console.log(limit.activeCount) // 0
console.log(limit.pendingCount) // 2
await Promise.all(promises) // ['foo', 'bar']
```

## Implement

### types

```ts
interface PLimtFunction {
  <Arguments extends unknown[], ReturnType>(
    fn: (...args: Arguments) => PromiseLike<ReturnType> | ReturnType,
    ...args: Arguments
  ): Promise<ReturnType>
  readonly activeCount: number
  readonly pendingCount: number
  reset: () => void
}

interface PLimitOptions {
  fn: (...args: unknown[]) => PromiseLike<any> | any
  args: unknown[]
  resolve: (value: unknown) => void
}
```

### core

```ts
function pLimit(concurrency: number): PLimtFunction {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0))
    throw new TypeError('Expected `concurrency` to be a number from 1 and up')

  const queue = new Queue()
  let activeCount = 0

  const next = () => {
    activeCount--

    if (queue.size > 0)
      queue.dequeue()()
  }

  const run = async (options: PLimitOptions) => {
    const { fn, args, resolve } = options

    activeCount++
    const result = (async () => fn(...args))()
    resolve(result)
    try {
      await result
    }
    catch {}

    next()
  }

  const enqueue = (options: PLimitOptions) => {
    queue.enqueue(run.bind(undefined, options));

    (async () => {
      await Promise.resolve()

      if (activeCount < concurrency && queue.size > 0)
        queue.dequeue()()
    })()
  }

  const generator = (
    fn: (...args: unknown[]) => PromiseLike<any> | any,
    ...args: unknown[],
  ) => new Promise(resolve => enqueue({ fn, args, resolve }))

  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount,
    },
    pendingCount: {
      get: () => queue.size,
    },
    reset: {
      value: () => queue.clear(),
    },
  })

  return generator as PLimtFunction
}
```
