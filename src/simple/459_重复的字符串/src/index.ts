/*
459. 重复的子字符串
给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

示例 1:

输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
示例 2:

输入: s = "aba"
输出: false
示例 3:

输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)

提示：

1 <= s.length <= 104
s 由小写英文字母组成

*/

/* _____________ Your Code Here _____________ */

export function repeatedSubstringPattern(s: string): boolean {
  if (s.length === 0) return false

  const getNext = (s: string) => {
    const next = []
    let j = -1

    next.push(j)

    for (let i = 1; i < s.length; ++i) {
      while (j >= 0 && s[i] !== s[j + 1]) j = next[j]
      if (s[i] === s[j + 1]) j++
      next.push(j)
    }

    return next
  }

  const next = getNext(s)

  if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0) {
    return true
  }
  return false
}
