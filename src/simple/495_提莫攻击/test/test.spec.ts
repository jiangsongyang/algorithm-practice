/* _____________ Test Cases _____________ */
import { findPoisonedDuration } from '../src'

describe('happy path', () => {
  // it('base test', () => {
  //   expect(findPoisonedDuration([1, 4], 2)).toBe(4)
  // })
  // it('base test', () => {
  //   expect(findPoisonedDuration([1, 2], 2)).toBe(3)
  // })
  it('base test', () => {
    expect(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(9)
  })
})
