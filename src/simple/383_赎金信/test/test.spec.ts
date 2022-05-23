/* _____________ Test Cases _____________ */
import { canConstruct } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(canConstruct('a', 'b')).not.toBeTruthy()
  })
  it('base test', () => {
    expect(canConstruct('aa', 'ab')).not.toBeTruthy()
  })
  it('base test', () => {
    expect(canConstruct('aa', 'aab')).toBeTruthy()
  })
})
