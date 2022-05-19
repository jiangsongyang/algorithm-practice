/* _____________ Test Cases _____________ */
import { addBinary } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(addBinary('11', '1')).toBe('100')
  })
  // it('base test', () => {
  //   expect(addBinary('1010', '1011')).toBe('10101')
  // })
})
