/* _____________ Test Cases _____________ */
import { threeSum } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
  })
})
