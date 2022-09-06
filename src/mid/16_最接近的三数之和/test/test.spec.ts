/* _____________ Test Cases _____________ */
import { threeSumClosest } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
  })
})
