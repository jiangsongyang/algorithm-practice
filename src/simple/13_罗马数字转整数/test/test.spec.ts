/* _____________ Test Cases _____________ */
import { romanToInt } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(romanToInt('IV')).toBe(4)
  })
})
