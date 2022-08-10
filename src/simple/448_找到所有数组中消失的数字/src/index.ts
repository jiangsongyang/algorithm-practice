/*
448. 找到所有数组中消失的数字
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

示例 1：

输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
示例 2：

输入：nums = [1,1]
输出：[2]
*/

/* _____________ Your Code Here _____________ */

export function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length
  for (const num of nums) {
    const x = (num - 1) % n
    nums[x] += n
  }
  const ret = []
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1)
    }
  }
  return ret
}
