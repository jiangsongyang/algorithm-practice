/* _____________ Test Cases _____________ */
import { findLHS } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5)
  })
  it('base test', () => {
    expect(findLHS([1, 2, 3, 4])).toBe(2)
  })
  it('base test', () => {
    expect(findLHS([1, 1, 1, 1])).toBe(0)
  })
})
