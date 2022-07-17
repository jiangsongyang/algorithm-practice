/* _____________ Test Cases _____________ */
import { intersect } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2])
  })
  it('base test', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4, 9])
  })
})
