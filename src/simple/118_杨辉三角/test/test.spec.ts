/* _____________ Test Cases _____________ */
import { generate } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(generate(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })
  // it('base test2', () => {
  //   expect(generate(1)).toBe([[1]])
  // })
})
