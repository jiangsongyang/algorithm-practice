/* _____________ Test Cases _____________ */
import { merge } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([1, 2, 2, 3, 5, 6])
  })
})
