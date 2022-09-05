/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
*/

/* _____________ Your Code Here _____________ */

export function permute (nums: number[]): number[][] {
  const res = []
  const n = nums.length
  const backTrack = (fir) => {
    if (fir === n) {
      // 长度等于nums长度，即构成了一种排列，复制进res中
      res.push([...nums])
    }
    for (let i = fir; i < n; i++) {
      ;[nums[fir], nums[i]] = [nums[i], nums[fir]] // 交换nums[fir]和nums[i],保证下标[0, fir]都是使用过的数字，下标[fir + 1, n - 1]都是未使用过的数字
      backTrack(fir + 1) // 继续确定下一位的数字
      ;[nums[fir], nums[i]] = [nums[i], nums[fir]] // 撤销标记
    }
  }
  backTrack(0)
  return res
}
