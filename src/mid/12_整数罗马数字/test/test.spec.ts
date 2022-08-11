/* _____________ Test Cases _____________ */
import { intToRoman } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(intToRoman(3)).toBe('III')
  })
  it('base test', () => {
    expect(intToRoman(4)).toBe('IV')
  })
  it('base test', () => {
    expect(intToRoman(9)).toBe('IX')
  })
  it('base test', () => {
    expect(intToRoman(58)).toBe('LVIII')
  })
})
