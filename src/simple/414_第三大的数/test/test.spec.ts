/* _____________ Test Cases _____________ */
import { thirdMax } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(thirdMax([3, 2, 1])).toBe(1)
  })
  it('base test', () => {
    expect(thirdMax([1, 2])).toBe(2)
  })
})
