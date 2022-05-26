/*
409. 最长回文串
给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
示例 2:

输入:s = "a"
输入:1
示例 3:

输入:s = "bb"
输入: 2

提示:

1 <= s.length <= 2000
s 只能由小写和/或大写英文字母组成
*/

/* _____________ Your Code Here _____________ */

// export function longestPalindrome(s: string): number {
//   const sLen = s.length
//   if (sLen === 1) return sLen
//   const hashMap: any = {}

//   // create map
//   for (let i = 0; i < s.length; i++) {
//     hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1
//   }
//   console.log(hashMap, 'hashMap')

//   if (Object.keys(hashMap).length === 1) {
//     return s.length
//   }

//   // Palindrome rule
//   // Compute pairs of characters
//   let res = 0

//   for (const key in hashMap) {
//     const v = hashMap[key]
//     if (v % 2 === 0) {
//       res += v
//       delete hashMap[key]
//     }
//   }
//   let _maxOdd = 0
//   for (const key in hashMap) {
//     const v = hashMap[key]
//     if (v % 2 === 1 && v !== 1) {
//       _maxOdd += v - 1
//       hashMap[key] = 1
//     }
//   }
//   let _c = 0
//   for (const key in hashMap) {
//     const v = hashMap[key]
//     if (v === 1) {
//       _c = 1
//       delete hashMap[key]
//     }
//   }

//   return res + _c + _maxOdd
// }

// 核心就是
export function longestPalindrome(s: string): number {
  const set = new Set()
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }
  return set.size > 0 ? count + 1 : count
}
