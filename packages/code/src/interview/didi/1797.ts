// Map
export class AuthenticationManager {
  constructor(
    public timeToLive: number,
    private map = new Map<string, number>(),
  ) {}

  generate(tokenId: string, currentTime: number): void {
    this.map.set(tokenId, currentTime + this.timeToLive)
  }

  renew(tokenId: string, currentTime: number): void {
    if (this.map.has(tokenId)) {
      const expireTime = this.map.get(tokenId)!
      if (expireTime > currentTime)
        this.map.set(tokenId, currentTime + this.timeToLive)
    }
  }

  countUnexpiredTokens(currentTime: number): number {
    for (const [key, value] of this.map.entries()) {
      if (value! <= currentTime)
        this.map.delete(key)
    }

    return this.map.size
  }

  get state() {
    return this.map
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
