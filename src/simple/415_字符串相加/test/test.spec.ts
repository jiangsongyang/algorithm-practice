/* _____________ Test Cases _____________ */
import { addStrings } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(addStrings('11', '123')).toBe('134')
  })
})
