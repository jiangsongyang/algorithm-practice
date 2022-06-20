/* _____________ Test Cases _____________ */
import { singleNumber } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
  })
  it('base test', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
  })
})
