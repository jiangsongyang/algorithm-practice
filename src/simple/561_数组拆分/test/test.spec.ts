/* _____________ Test Cases _____________ */
import { arrayPairSum } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4)
  })
  it('base test', () => {
    expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9)
  })
})
