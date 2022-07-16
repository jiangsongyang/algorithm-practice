/*
349. 两个数组的交集
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

/* _____________ Your Code Here _____________ */

export function intersection (nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>()
  nums1.forEach((num) => {
    !map.has(num) && map.set(num, 1)
  })

  const result: any = {}
  nums2.forEach((num) => {
    if (map.has(num)) {
      result[num] = 1
    }
  })

  return Object.keys(result).map(Number)
}
