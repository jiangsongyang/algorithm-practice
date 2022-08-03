/* _____________ Test Cases _____________ */
import { nextPermutation } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(nextPermutation([1, 2, 3])).toStrictEqual([1, 3, 2])
  })
  it('base test', () => {
    expect(nextPermutation([3, 2, 1])).toStrictEqual([1, 2, 3])
  })
  it('base test', () => {
    expect(nextPermutation([1, 1, 5])).toStrictEqual([1, 5, 1])
  })
})
