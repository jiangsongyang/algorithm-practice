/* _____________ Test Cases _____________ */
import { missingNumber } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
  })
  it('base test', () => {
    expect(missingNumber([0, 1])).toBe(2)
  })
  it('base test', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
  it('base test', () => {
    expect(missingNumber([0])).toBe(1)
  })
})
