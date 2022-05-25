/* _____________ Test Cases _____________ */
import { longestPalindrome } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(longestPalindrome('abccccdd')).toBe(7)
  })
  it('base test', () => {
    expect(longestPalindrome('a')).toBe(1)
  })
  it('base test', () => {
    expect(longestPalindrome('bb')).toBe(2)
  })
  it('base test', () => {
    expect(longestPalindrome('ccc')).toBe(3)
  })
  it('base test', () => {
    expect(longestPalindrome('bananas')).toBe(5)
  })
  it('base test', () => {
    expect(longestPalindrome('ababababa')).toBe(9)
  })
})
