/* _____________ Test Cases _____________ */
import { reverseVowels } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(reverseVowels('hello')).toBe('holle')
  })
})
