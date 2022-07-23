/*

*/

/* _____________ Your Code Here _____________ */

export function findErrorNums (nums: number[]): number[] {
  const errorNums = new Array(2).fill(0)
  const n = nums.length
  nums.sort((a, b) => a - b)
  let prev = 0
  for (let i = 0; i < n; i++) {
    const curr = nums[i]
    if (curr === prev) {
      errorNums[0] = prev
    } else if (curr - prev > 1) {
      errorNums[1] = prev + 1
    }
    prev = curr
  }
  if (nums[n - 1] !== n) {
    errorNums[1] = n
  }
  return errorNums
}
