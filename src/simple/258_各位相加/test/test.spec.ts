/* _____________ Test Cases _____________ */
import { addDigits } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(addDigits(38)).toBe(2)
  })
  it('base test', () => {
    expect(addDigits(41)).toBe(5)
  })
  it('base test', () => {
    expect(addDigits(65)).toBe(2)
  })
  it('base test', () => {
    expect(addDigits(999)).toBe(9)
  })
  it('base test', () => {
    expect(addDigits(0)).toBe(0)
  })
})
