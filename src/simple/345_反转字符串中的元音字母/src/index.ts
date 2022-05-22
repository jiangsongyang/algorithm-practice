/*
345. 反转字符串中的元音字母
给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

示例 1：

输入：s = "hello"
输出："holle"
示例 2：

输入：s = "leetcode"
输出："leotcede"

提示：

1 <= s.length <= 3 * 105
s 由 可打印的 ASCII 字符组成
*/

/* _____________ Your Code Here _____________ */

export function reverseVowels (s: string) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  let l = 0
  let r = s.length - 1
  const arr = s.split('')

  while (l < r) {
    // 找到左指针的元音字母
    while (l < s.length && !vowelsArr.includes(s[l])) {
      ++l
    }

    // 找到右指针的元音字母
    while (r > 0 && !vowelsArr.includes(s[r])) {
      --r
    }

    // 交换元音字母
    if (l < r) {
      const temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      ++l
      --r
    }
  }
  return arr.join('')
}
