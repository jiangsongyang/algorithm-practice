/* _____________ Test Cases _____________ */
import { strStr } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })
  it('base test 2', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
  })
})
