/*
389. 找不同
给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

示例 1：

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
示例 2：

输入：s = "", t = "y"
输出："y"

提示：

0 <= s.length <= 1000
t.length == s.length + 1
s 和 t 只包含小写字母
*/

/* _____________ Your Code Here _____________ */

export function findTheDifference(s: string, t: string): string {
  let as = 0
  let at = 0
  for (let i = 0; i < s.length; i++) {
    as += s[i].charCodeAt(0)
  }
  for (let i = 0; i < t.length; i++) {
    at += t[i].charCodeAt(0)
  }
  return String.fromCharCode(at - as)
}
