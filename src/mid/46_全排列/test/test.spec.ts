/* _____________ Test Cases _____________ */
import { main } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(main()).toBe(null)
  })
})
