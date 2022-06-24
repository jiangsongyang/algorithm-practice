/* _____________ Test Cases _____________ */
import { longestValidParentheses } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(longestValidParentheses('(()')).toBe(2)
  })
})
