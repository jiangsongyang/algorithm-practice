/*
35. 搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为 无重复元素 的 升序 排列数组
-104 <= target <= 104
*/

/* _____________ Your Code Here _____________ */

// export function searchInsert(nums: number[], target: number): number {
//   let res = 0
//   if (target > nums[nums.length - 1]) return nums.length
//   if (target === nums[nums.length - 1]) return nums.length - 1
//   for (let i = 1; i < nums.length; i++) {
//     const curr = nums[i]
//     const before = nums[i - 1]
//     if (target > before && target <= curr) {
//       res = i
//       break
//     }
//   }
//   return res
// }
// 二分查找
export function searchInsert (nums: number[], target: number): number {
  const n = nums.length
  let left = 0
  let right = n - 1
  let ans = n
  while (left <= right) {
    const mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}
