/* _____________ Test Cases _____________ */
import { combinationSum } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toBe([[2, 2, 3], [7]])
  })
})
