/* _____________ Test Cases _____________ */
import { plusOne } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
  })
  it('base test', () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2])
  })
  it('base test', () => {
    expect(plusOne([0])).toStrictEqual([1])
  })
  it('base test', () => {
    expect(plusOne([9])).toStrictEqual([1, 0])
  })
  it('base test', () => {
    expect(plusOne([8, 9, 9, 9])).toStrictEqual([9, 0, 0, 0])
  })
})
