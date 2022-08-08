/* _____________ Test Cases _____________ */
import { findDisappearedNumbers } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6])
  })
  it('base test', () => {
    expect(findDisappearedNumbers([1, 1])).toStrictEqual([2])
  })
})
