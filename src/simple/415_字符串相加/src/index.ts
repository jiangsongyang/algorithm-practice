/*
415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"

提示：

1 <= num1.length, num2.length <= 104
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
*/

/* _____________ Your Code Here _____________ */

export function addStrings (num1: string, num2: string): string {
  const len1 = num1.length
  const len2 = num2.length
  const len = Math.max(len1, len2)
  const result = []
  let carry = 0
  let i = 0
  while (i < len) {
    const n1 = num1[len1 - 1 - i] || '0'
    const n2 = num2[len2 - 1 - i] || '0'
    const sum = +n1 + +n2 + carry
    result.unshift(sum % 10)
    carry = Math.floor(sum / 10)
    i++
  }
  if (carry) {
    result.unshift(carry)
  }
  return result.join('')
}
