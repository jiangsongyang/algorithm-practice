/* _____________ Test Cases _____________ */
import { missingNumber } from '../src'

describe('happy path', () => {
  it('test [3, 0, 1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
  })
  it('test [0, 1]', () => {
    expect(missingNumber([0, 1])).toBe(2)
  })
  it('test [9, 6, 4, 2, 3, 5, 7, 0, 1]', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
  it('test [0]', () => {
    expect(missingNumber([0])).toBe(1)
  })
})
