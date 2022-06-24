/*
32. 最长有效括号
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0

提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
*/

/* _____________ Your Code Here _____________ */

export function longestValidParentheses (s: string): number {
  let max = 0
  if (s.length < 1) return max

  const len = s.length

  // 栈顶之所有加入一个-1,纯粹是为了方便计算有效括号的长度
  // 不然就需要手动调整为i-j+1;同时而确保第一个字符为")"时不需要特殊处理
  const stack = [-1]

  for (let i = 0; i < len; i++) {
    const value = s[i]
    if (value === '(') {
      stack.push(i)
    } else if (value === ')') {
      stack.pop()

      // 栈顶加入一个pivot字符")",实际上是方便计算有效括号串长度
      if (stack.length < 1) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }

  return max
}
