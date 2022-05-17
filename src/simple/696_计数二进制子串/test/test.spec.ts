/* _____________ Test Cases _____________ */
import { countBinarySubstrings } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(countBinarySubstrings('00110011')).toBe(6)
  })
  // it('base test2', () => {
  //   expect(countBinarySubstrings('10101')).toBe(4)
  // })
  // it('base test3', () => {
  //   expect(countBinarySubstrings("00100")).toBe(2)
  // })
})
