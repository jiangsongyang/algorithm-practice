/* _____________ Test Cases _____________ */
import { dominantIndex } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1)
  })
  it('base test', () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1)
  })
  it('base test', () => {
    expect(dominantIndex([1])).toBe(0)
  })
})
