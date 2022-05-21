/*
290. 单词规律
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false

提示:

1 <= pattern.length <= 300
pattern 只包含小写英文字母
1 <= s.length <= 3000
s 只包含小写英文字母和 ' '
s 不包含 任何前导或尾随对空格
s 中每个单词都被 单个空格 分隔

*/

/* _____________ Your Code Here _____________ */

export function wordPattern (pattern: string, s: string): boolean {
  const arrPattern = pattern.split('')
  const pMap: any = {}
  const pArr: number[] = []
  let pv = 1
  arrPattern.forEach((i) => {
    if (pMap[i]) {
      pArr.push(pMap[i])
    } else {
      pMap[i] = pv
      pArr.push(pv)
      pv++
    }
  })

  const token = ' '
  const arrS = s.split(token)
  const sMap: any = {}
  const sArr: number[] = []
  let sv = 1
  arrS.forEach((i) => {
    if (sMap[i]) {
      sArr.push(sMap[i])
    } else {
      sMap[i] = sv
      sArr.push(sv)
      sv++
    }
  })

  return JSON.stringify(sArr) === JSON.stringify(pArr)
}
