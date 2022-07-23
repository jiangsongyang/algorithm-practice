/* _____________ Test Cases _____________ */
import { findErrorNums } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(findErrorNums([1, 2, 2, 4])).toStrictEqual([2, 3])
  })
  it('base test', () => {
    expect(findErrorNums([1, 1])).toStrictEqual([1, 2])
  })
})
