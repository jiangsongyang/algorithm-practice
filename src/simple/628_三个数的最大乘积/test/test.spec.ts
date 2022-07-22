/* _____________ Test Cases _____________ */
import { maximumProduct } from '../src'

describe('happy path', () => {
  // it('base test', () => {
  //   expect(maximumProduct([1, 2, 3])).toBe(6)
  // })
  // it('base test', () => {
  //   expect(maximumProduct([1, 2, 3, 4])).toBe(24)
  // })
  it('base test', () => {
    expect(maximumProduct([-1, -2, -3])).toBe(-6)
  })
})
