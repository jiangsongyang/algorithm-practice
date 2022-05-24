/* _____________ Test Cases _____________ */
import { findTheDifference } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e')
  })
  it('base test', () => {
    expect(findTheDifference('', 'y')).toBe('y')
  })
  it('base test', () => {
    expect(findTheDifference('a', 'aa')).toBe('a')
  })
})
