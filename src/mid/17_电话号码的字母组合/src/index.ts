/*
17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

*/

/* _____________ Your Code Here _____________ */

export function letterCombinations(digits: string): string[] {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits.length <= 1) {
    return map[digits] ? map[digits] : []
  }
  let result = []
  let beginIndex = 1
  while (digits.slice(beginIndex)) {
    // 从第二次开始，就使用上次循环中遗留下的 result
    const target =
      beginIndex === 1 ? map[digits[beginIndex - 1]] : JSON.parse(JSON.stringify(result))
    // 并且使用完之后，需要将 result 复原（因为是上一次的结果，最终输出的结果应该是所有位数的集合）
    result = []
    // 找下一位字符对应的 map 数据集
    const source = map[digits[beginIndex]]
    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < source.length; j++) {
        // 将两个数据集组合拼装
        const combination = target[i] + source[j]
        result.push(combination)
      }
    }
    beginIndex++
  }
  // 输出结果
  return result
}
