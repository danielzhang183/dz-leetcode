import { describe, expect, it } from 'vitest'
import { BrowserHistory } from '../../../src/interview/bytedance/1472'

describe('BrowserHistory', () => {
  it('exported', () => {
    const browserHistory = new BrowserHistory('leetcode.com')
    browserHistory.visit('google.com') // You are in 'leetcode.com'. Visit 'google.com'
    browserHistory.visit('facebook.com') // You are in 'google.com'. Visit 'facebook.com'
    browserHistory.visit('youtube.com') // You are in 'facebook.com'. Visit 'youtube.com'
    expect(browserHistory.state).toMatchInlineSnapshot('"leetcode.com->google.com->facebook.com->youtube.com"')
    expect(browserHistory.back(1)).toBe('facebook.com') // You are in 'youtube.com', move back to 'facebook.com' return 'facebook.com'
    expect(browserHistory.back(1)).toBe('google.com') // You are in 'facebook.com', move back to 'google.com' return 'google.com'
    expect(browserHistory.forward(1)).toBe('facebook.com') // You are in 'google.com', move forward to 'facebook.com' return 'facebook.com'
    browserHistory.visit('linkedin.com') // You are in 'facebook.com'. Visit 'linkedin.com'
    expect(browserHistory.state).toMatchInlineSnapshot('"leetcode.com->google.com->facebook.com->linkedin.com"')
    expect(browserHistory.forward(2)).toBe('linkedin.com') // You are in 'linkedin.com', you cannot move forward any steps.
    expect(browserHistory.back(2)).toBe('google.com') // You are in 'linkedin.com', move back two steps to 'facebook.com' then to 'google.com'. return 'google.com'
    expect(browserHistory.back(7)).toBe('leetcode.com') // You are in 'google.com', you can move back only one step to 'leetcode.com'. return 'leetcode.com'
  })
})
