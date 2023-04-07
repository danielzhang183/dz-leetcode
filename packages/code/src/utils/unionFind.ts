export class UnionFind {
  ancestor: number[]

  constructor(n: number) {
    this.ancestor = Array.from(
      { length: n + 1 },
      (_, index) => index,
    )
  }

  // return the root of `u` node
  find(u: number) {
    return u === this.ancestor[u]
      ? u
      : this.ancestor[u] = this.find(this.ancestor[u])
  }

  // connect `u` and `v`
  // actually, make the root of `u` point to the root of `v`
  union(u: number, v: number) {
    this.ancestor[this.find(u)] = this.find(v)
  }

  connect(u: number, v: number) {
    return this.find(u) === this.find(v)
  }
}
