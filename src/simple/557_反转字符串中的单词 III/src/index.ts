/*
给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1：

输入：s = "Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
示例 2:

输入： s = "God Ding"
输出："doG gniD"

提示：

1 <= s.length <= 5 * 104
s 包含可打印的 ASCII 字符。
s 不包含任何开头或结尾空格。
s 里 至少 有一个词。
s 中的所有单词都用一个空格隔开。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-words-in-a-string-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/* _____________ Your Code Here _____________ */

export function reverseWords(s: string): string {
  const token = ' '
  const stack: string[] = []
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item !== token) {
      stack.unshift(item)
    }
    if (item === token || i === s.length - 1) {
      res += stack.join('') + (i !== s.length - 1 ? token : '')
      stack.length = 0
    }
  }
  return res
}
