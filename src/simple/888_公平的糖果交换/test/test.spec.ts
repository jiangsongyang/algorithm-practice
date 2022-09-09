/* _____________ Test Cases _____________ */
import { fairCandySwap } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(fairCandySwap([1, 1], [2, 2])).toStrictEqual([1, 2])
  })
})
