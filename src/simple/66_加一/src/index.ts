/*
66. 加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9
*/

/* _____________ Your Code Here _____________ */

// 不能转换成数字
// 有可能溢出
export function plusOne(digits: number[]): number[] {
  /**
   * 思路
   * 三种情况
   * 1 . 目标里没有 9
   * -> [1 , 2 , 3]
   * 这种情况最后一位 + 1
   * 2 . 目标里多个 9
   * -> [1 , 2, 9 , 9]
   * 这种情况把最后一个不是9的 + 1
   * 把 9 变成 0
   * 3 . 目标全是 9
   * -> [9,9,9,9]
   * 创建新数组 长度为目标 + 1 第一位是 1 其他是 0
   */
  const n = digits.length
  // 从后往前找
  for (let i = n - 1; i >= 0; --i) {
    // 找第一个不是9的数
    if (digits[i] !== 9) {
      ++digits[i]
      // 把之前的9都置为 0
      for (let j = i + 1; j < n; ++j) {
        digits[j] = 0
      }
      return digits
    }
  }

  // digits 中所有的元素均为 9
  const ans = new Array(n + 1).fill(0)
  ans[0] = 1
  return ans
}
