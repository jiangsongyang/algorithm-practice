/*
383. 赎金信
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true

提示：

1 <= ransomNote.length, magazine.length <= 105
ransomNote 和 magazine 由小写英文字母组成
*/

/* _____________ Your Code Here _____________ */

export function canConstruct (ransomNote: string, magazine: string): boolean {
  const rMap: any = {}
  const mMap: any = {}
  for (let i = 0; i < ransomNote.length; i++) {
    rMap[ransomNote[i]] = rMap[ransomNote[i]] ? rMap[ransomNote[i]] + 1 : 1
  }
  for (let i = 0; i < magazine.length; i++) {
    mMap[magazine[i]] = mMap[magazine[i]] ? mMap[magazine[i]] + 1 : 1
  }
  let res = true
  for (const key in rMap) {
    if (mMap[key] === undefined || rMap[key] > mMap[key]) {
      res = false
    }
  }
  return res
}
