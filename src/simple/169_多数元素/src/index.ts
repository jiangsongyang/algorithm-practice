/*
169. 多数元素
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

/* _____________ Your Code Here _____________ */

export function majorityElement(nums: number[]): number {
  const hashMap = new Map<number, number>()
  for (const num of nums) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num)! + 1)
    } else {
      hashMap.set(num, 1)
    }
  }
  let _temp = 0
  let max = null
  for (const [k, v] of hashMap) {
    if (v > _temp) {
      _temp = v
      max = k
    } else {
      continue
    }
  }
  return max!
}
