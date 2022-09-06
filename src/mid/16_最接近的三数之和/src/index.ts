/*
16. 最接近的三数之和
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0

提示：

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/* _____________ Your Code Here _____________ */

export function threeSumClosest (nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  // 初始化一个最小值
  let min = Infinity
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    // 定义左右指针
    let left = i + 1
    let right = len - 1
    while (left < right) {
      // 当前三数之和
      const sum = nums[i] + nums[left] + nums[right]
      // 如果当前和更接近，更新最小值
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }
      // 根据sum和target的关系，移动指针
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        // sum和target相等，直接返回sum，肯定是最小的了
        return sum
      }
    }
  }
  // 遍历结束，返回最接近的和
  return min
}
