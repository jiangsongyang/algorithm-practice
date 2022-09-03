/*
43. 字符串相乘
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"

提示：

1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字0本身。
*/

/* _____________ Your Code Here _____________ */

export function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'
  const l1 = num1.length
  const l2 = num2.length
  const res = new Array(l1 + l2).fill(0)
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const mul = num1[i] * num2[j]
      const up = i + j
      const cur = i + j + 1
      const sum = mul + res[cur]
      const carry = Math.floor(sum / 10)
      res[cur] = sum % 10
      res[up] += carry
    }
  }
  while (res[0] === 0) res.shift()
  return res.join('')
}
