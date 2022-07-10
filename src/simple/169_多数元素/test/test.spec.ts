/* _____________ Test Cases _____________ */
import { majorityElement } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
  })
  it('base test', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})
