/* _____________ Test Cases _____________ */
import { firstUniqChar } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(firstUniqChar('leetcode')).toBe(0)
  })
  it('base test', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2)
  })
  it('base test', () => {
    expect(firstUniqChar('aabb')).toBe(-1)
  })
})
