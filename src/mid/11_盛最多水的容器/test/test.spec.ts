/* _____________ Test Cases _____________ */
import { maxArea } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })
})
