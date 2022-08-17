/* _____________ Test Cases _____________ */
import { mergeTwoLists } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toBe([1, 1, 2, 3, 4, 4])
  })
})
