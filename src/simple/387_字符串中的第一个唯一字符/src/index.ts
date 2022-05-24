/*
387. 字符串中的第一个唯一字符
给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

示例 1：

输入: s = "leetcode"
输出: 0
示例 2:

输入: s = "loveleetcode"
输出: 2
示例 3:

输入: s = "aabb"
输出: -1

提示:

1 <= s.length <= 105
s 只包含小写字母
*/

/* _____________ Your Code Here _____________ */

export function firstUniqChar(s: string): number {
  const map: any = {}
  let res = -1
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? { v: map[s[i]].v + 1, i } : { v: 1, i }
  }
  const _temp = []
  for (const i in map) {
    const item = map[i]
    if (item.v === 1) {
      _temp.push(item.i)
    }
  }
  res = _temp.sort((a, b) => a - b)[0] === undefined ? -1 : _temp.sort((a, b) => a - b)[0]
  return res
}
