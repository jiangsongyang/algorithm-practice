/* _____________ Test Cases _____________ */
import { isAnagram } from '../src'

describe('happy path', () => {
  it('base test', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
  })
  it('base test2', () => {
    expect(isAnagram('rat', 'car')).not.toBeTruthy()
  })
})
