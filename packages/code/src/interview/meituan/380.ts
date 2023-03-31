export class RandomizedSet {
  constructor(
    public map = new Map<number, number>(),
    public list: number[] = [],
  ) {}

  insert(val: number): boolean {
    if (this.map.has(val))
      return false
    this.list.push(val)
    this.map.set(val, this.list.length - 1)
    return true
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      const index = this.map.get(val)!
      const last = this.list[this.list.length - 1]
      this.list[index] = last
      this.map.set(last, index)
      this.list.pop()
      this.map.delete(val)
      return true
    }

    return false
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length)
    return this.list[randomIndex]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
