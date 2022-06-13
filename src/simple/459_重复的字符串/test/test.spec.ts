/* _____________ Test Cases _____________ */
import { repeatedSubstringPattern } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true)
  })
})
