/* _____________ Test Cases _____________ */
import { wordPattern } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
  })
  it('base test2', () => {
    expect(wordPattern('abba', 'og cat cat fish')).toBe(false)
  })
  it('base test3', () => {
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
  })
})
