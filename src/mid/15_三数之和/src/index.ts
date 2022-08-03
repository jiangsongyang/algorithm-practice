/*
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/* _____________ Your Code Here _____________ */

export function threeSum(nums: number[]): number[][] {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  const res = []
  nums.sort((a, b) => a - b)
  const size = nums.length
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0
    while (i < size - 2) {
      if (nums[i] > 0) break // 最左侧大于0，无解
      let first = i + 1
      let last = size - 1
      while (first < last) {
        if (nums[i] * nums[last] > 0) break // 三数同符号，无解
        const sum = nums[i] + nums[first] + nums[last]
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]])
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) {} // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) {} // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) {}
    }
  }

  return res
}
