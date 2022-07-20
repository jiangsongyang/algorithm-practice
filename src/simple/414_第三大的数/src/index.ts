/*
414. 第三大的数
给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

示例 1：

输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。
示例 2：

输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。
示例 3：

输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。

提示：

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/* _____________ Your Code Here _____________ */

export function thirdMax(nums: number[]): number {
  const sort = nums.sort((a, b) => b - a)

  const set = new Set<number>()

  for (let i = 0; i < sort.length; i++) {
    if (set.size === 3) break

    if (!set.has(sort[i])) {
      set.add(sort[i])
    }
  }

  const arr = Array.from(set)

  return arr.length === 3 ? arr[arr.length - 1] : arr[0]
}
