export function candy1(ratings: number[]): number {
  const len = ratings.length
  const candy: number[] = new Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1])
      candy[i] = candy[i - 1] + 1
  }

  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      candy[i] = Math.max(candy[i], candy[i + 1] + 1)
  }

  return candy.reduce((a, b) => a + b, 0)
}

export function candy(ratings: number[]) {
  let candy = 1
  let inc = 1
  let dec = 0
  let pre = 1

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0
      if (ratings[i] === ratings[i - 1])
        pre = 1
      else
        pre++
      candy += pre
      inc = pre
    }
    else {
      dec++
      if (dec === inc)
        dec++

      candy += dec
      pre = 1
    }
  }
  return candy
}
