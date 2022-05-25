/* _____________ Test Cases _____________ */
import { isSubsequence } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy()
  })
  it('base test', () => {
    expect(isSubsequence('axc', 'ahbgdc')).not.toBeTruthy()
  })
})
