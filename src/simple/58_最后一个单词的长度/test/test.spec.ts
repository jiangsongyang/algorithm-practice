/* _____________ Test Cases _____________ */
import { lengthOfLastWord } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5)
  })
  it('base test2', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4)
  })
  it('base test3', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6)
  })
})
