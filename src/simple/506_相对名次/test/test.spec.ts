/* _____________ Test Cases _____________ */
import { findRelativeRanks } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toStrictEqual([
      'Gold Medal',
      'Silver Medal',
      'Bronze Medal',
      '4',
      '5'
    ])
  })
  it('base test', () => {
    expect(findRelativeRanks([10, 3, 8, 9, 4])).toStrictEqual([
      'Gold Medal',
      '5',
      'Bronze Medal',
      'Silver Medal',
      '4'
    ])
  })
})
