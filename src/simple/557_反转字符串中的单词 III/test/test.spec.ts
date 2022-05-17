/* _____________ Test Cases _____________ */
import { reverseWords } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
  })
  it('base test2', () => {
    expect(reverseWords('God Ding')).toBe('doG gniD')
  })
})
