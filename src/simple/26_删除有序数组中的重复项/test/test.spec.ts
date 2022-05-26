/* _____________ Test Cases _____________ */
import { removeDuplicates } from '../src'

describe('happy path', () => {
  // it('base test', () => {
  //   expect(removeDuplicates([1, 1, 2])).toBe(2)
  // })
  it('base test', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
  // it('base test', () => {
  //   expect(removeDuplicates([1, 1, 2])).toBe(2)
  // })
})
