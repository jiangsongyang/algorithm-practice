/* _____________ Test Cases _____________ */
import { isIsomorphic } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy()
  })
  it('base test2', () => {
    expect(isIsomorphic('foo', 'bar')).not.toBeTruthy()
  })
  it('base test3', () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy()
  })
})
