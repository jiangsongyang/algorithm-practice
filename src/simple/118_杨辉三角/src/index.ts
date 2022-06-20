/*
118. 杨辉三角
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]
*/

/* _____________ Your Code Here _____________ */

export function generate(numRows: number): number[][] {
  const res = []
  /**
   let egg=[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ]
  */
  for (let i = 0; i < numRows; i++) {
    // 看上面的例子数组，第0行1个元素，第1行2个元素，第2行3个元素....
    const row = new Array(i + 1).fill(1)
    // 这里j从1开始到row.length-2结束  是因为每一行的第一个和最后一个其实是不需要算的，因为已经默认为1了，只有中间的才需要算
    for (let j = 1; j < row.length - 1; j++) {
      // 看上面的例子数组，以（0计数开始）2行1列的元素2举例，等于上面1+1（上一行同一列及上一行前一列元素）
      row[j] = res[i - 1][j] + res[i - 1][j - 1]
    }
    res.push(row)
  }
  return res
}
