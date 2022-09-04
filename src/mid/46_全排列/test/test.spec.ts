/* _____________ Test Cases _____________ */
import { permute } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(permute([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ])
  })
})
