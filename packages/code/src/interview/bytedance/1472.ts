export class BrowserHistory {
  constructor(
    public homepage: string,
    private stack: string[] = [],
    private current = 0,
  ) {
    this.stack = [homepage]
  }

  visit(url: string): void {
    this.stack.length = this.current + 1

    this.stack.push(url)
    this.current++
  }

  back(steps: number): string {
    this.current = this.current - steps >= 0 ? this.current - steps : 0
    return this.stack[this.current]
  }

  forward(steps: number): string {
    this.current = this.current + steps >= this.stack.length
      ? this.stack.length - 1
      : this.current + steps
    return this.stack[this.current]
  }

  get state() {
    return this.stack.join('->')
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
