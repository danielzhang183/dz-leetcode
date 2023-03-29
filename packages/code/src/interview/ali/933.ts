export class RecentCounter {
  constructor(
    private requests: number[] = [],
    private start = -3000,
  ) {}

  ping(t: number): number {
    this.start = t - 3000
    while (this.requests.length) {
      if (this.requests[0] < this.start)
        this.requests.shift()
      else
        break
    }
    this.requests.push(t)
    return this.requests.length
  }

  get range(): [number, number] {
    return [this.start, this.start + 3000]
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
