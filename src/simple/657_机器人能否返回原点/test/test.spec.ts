/* _____________ Test Cases _____________ */
import { judgeCircle } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(judgeCircle('UD')).toBe(true)
  })
  it('base test', () => {
    expect(judgeCircle('LL')).toBe(false)
  })
})
