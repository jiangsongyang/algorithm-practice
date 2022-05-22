/* _____________ Test Cases _____________ */
import { reverseString } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(
      JSON.stringify(reverseString(['h', 'e', 'l', 'l', 'o'])) ===
        JSON.stringify(['o', 'l', 'l', 'e', 'h'])
    ).toBeTruthy()
  })
})
