/*
242. 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
*/

/* _____________ Your Code Here _____________ */

// double hash map
// export function isAnagram(s: string, t: string): boolean {
//   const sMap: any = {}
//   const tMap: any = {}
//   const arrS = s.split('')
//   arrS.forEach((code) => {
//     sMap[code] = sMap[code] ? sMap[code] + 1 : 1
//   })
//   const arrT = t.split('')
//   arrT.forEach((code) => {
//     tMap[code] = tMap[code] ? tMap[code] + 1 : 1
//   })

//   let res = true
//   const _temp = { ...tMap }
//   for (const key in sMap) {
//     if (sMap[key] === tMap[key]) {
//       delete _temp[key]
//     } else {
//       res = false
//       break
//     }
//   }
//   if (res && Object.keys(_temp).length === 0) {
//     res = true
//   } else {
//     res = false
//   }
//   return res
// }
// sort
// export function isAnagram(s: string, t: string): boolean {
//   return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort())
// }
// only one hash map
export function isAnagram (s: string, t: string): boolean {
  // 0 . create hash map
  const map = Array(26).fill(0)
  // 1 . use s to fill hash map
  const indexMap: any = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
  }

  s.split('').forEach((code) => {
    map[indexMap[code]]++
  })

  // 2 . use t to subtraction map
  // when value small than 0
  // it not a validate value
  // return false
  // if all value is 0
  // return true
  let res = true
  const tArr = t.split('')
  for (let i = 0; i < tArr.length; i++) {
    const code = tArr[i]
    map[indexMap[code]]--
    if (map[indexMap[code]] < 0) {
      res = false
      break
    }
  }
  res = map.every((i) => i === 0)
  return res
}
