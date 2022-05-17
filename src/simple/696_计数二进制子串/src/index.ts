/*
给定一个字符串 s，统计并返回具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是成组连续的。

重复出现（不同位置）的子串也要统计它们出现的次数。

示例 1：

输入：s = "00110011"
输出：6
解释：6 个子串满足具有相同数量的连续 1 和 0 ："0011"、"01"、"1100"、"10"、"0011" 和 "01" 。
注意，一些重复出现的子串（不同位置）要统计它们出现的次数。
另外，"00110011" 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。
示例 2：

输入：s = "10101"
输出：4
解释：有 4 个子串："10"、"01"、"10"、"01" ，具有相同数量的连续 1 和 0 。

提示：

1 <= s.length <= 105
s[i] 为 '0' 或 '1'

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/count-binary-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/* _____________ Your Code Here _____________ */
/**
 * 00110011 -> 6
 * how to find it
 * `0011`0011
 * 0`01`10011
 * 00`1100`11
 * 001`10`011
 * 0011`0011`
 * 00110`01`1
 */
export function countBinarySubstrings(s: string): number {
  const sLen = s.length
  let pointer = 0
  const stack = []
  let res = 0
  while (pointer < sLen) {
    for (let i = pointer; i < sLen; i++) {
      const prev: any = stack[stack.length - 1]
      const item = s[i]
      // 第一次
      if (prev === undefined) {
        stack.push(item)
      } else {
        if (prev === item) {
          stack.push(item)
        } else {
          stack.pop()
        }
        if (stack.length === 0) {
          res++
          break
        }
      }
    }
    pointer++
  }
  return res
}
