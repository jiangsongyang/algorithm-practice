/* _____________ Test Cases _____________ */
import { removeElement } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
  })
})
