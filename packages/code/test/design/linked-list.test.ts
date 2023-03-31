import { describe, expect, it } from 'vitest'
import { LinkedList } from '../../src/design/linked-list'

const ll = new LinkedList()

describe('linked-list', () => {
  it('add', () => {
    ll.add(1)
    ll.add(2)
    ll.add(4)

    expect(ll.size).toBe(3)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2, 4"')
  })

  it('insertAt', () => {
    ll.insertAt(3, 2)

    expect(ll.size).toBe(4)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2, 3, 4"')
  })

  it('removeFrom', () => {
    ll.removeFrom(3)

    expect(ll.size).toBe(3)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2, 3"')
  })

  it('removeElement', () => {
    expect(ll.removeElement(4)).toBe(-1)
    expect(ll.size).toBe(3)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2, 3"')
    expect(ll.removeElement(3)).toBe(3)
    expect(ll.size).toBe(2)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2"')
  })

  it('indexOf', () => {
    expect(ll.indexOf(1)).toBe(0)
    expect(ll.indexOf(2)).toBe(1)
    expect(ll.indexOf(3)).toBe(-1)
  })

  it('clear - isEmpty', () => {
    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size).toBe(2)
    expect(ll.toString()).toMatchInlineSnapshot('"1, 2"')
    ll.clear()
    expect(ll.isEmpty()).toBeTruthy()
    expect(ll.size).toBe(0)
  })
})
