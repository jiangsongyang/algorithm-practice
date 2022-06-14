/* _____________ Test Cases _____________ */
import { countSegments } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(countSegments('Hello, my name is John')).toBe(5)
  })
})
