/* _____________ Test Cases _____________ */
import { searchInsert } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })
  it('base test', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })
  it('base test', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
  it('base test', () => {
    expect(searchInsert([1], 1)).toBe(0)
  })
})
