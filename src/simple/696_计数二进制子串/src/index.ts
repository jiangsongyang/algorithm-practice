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
 * 思路
 * 将 string 按照相同的值切割 如
 * 0011100111
 * 切成
 * 00 111 00 111
 * 组合成
 * [ 2 , 3 , 2 , 3 ]
 * 找相邻的进行比较
 * 取小的
 * 循环 俩俩比
 */
export function countBinarySubstrings(s: string): number {
  const sLen = s.length
  const arr = []
  let pre = null
  let res = 0
  for (let i = 0; i < sLen; i++) {
    const item = s[i]
    if (pre === item) {
      arr[arr.length - 1].push(item)
    } else {
      arr.push([item])
    }
    pre = item
  }
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i - 1].length
    const next = arr[i].length
    res += Math.min(curr, next)
  }
  return res
}
