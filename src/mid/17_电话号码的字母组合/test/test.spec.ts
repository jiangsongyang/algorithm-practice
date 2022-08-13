/* _____________ Test Cases _____________ */
import { letterCombinations } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(letterCombinations('23')).toBe(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })
})
