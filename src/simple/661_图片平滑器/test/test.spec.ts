/* _____________ Test Cases _____________ */
import { imageSmoother } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(
      imageSmoother([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ])
    ).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
  })
})
