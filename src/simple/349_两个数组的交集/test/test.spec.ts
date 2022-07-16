/* _____________ Test Cases _____________ */
import { intersection } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2])
  })
})
