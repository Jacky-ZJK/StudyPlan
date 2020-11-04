/*
一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

示例 1：

输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
示例 2：

输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
示例 3：

输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。
*/

var massage = function(nums) {
  let length = nums.length
  if (length === 0) {
      return 0
  }
  if (length === 1) {
      return nums[0]
  }
  let dp = []
  for (let i = 0; i < length; i++) {
      dp[i] = new Array()
  }
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (var i = 1; i < length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
      dp[i][1] = dp[i - 1][0] + nums[i]
  }

  return Math.max(dp[i - 1][0], dp[i - 1][1])
};

var massage = function(nums) {
  let a = 0, b = 0;
      for (let i = 0; i < nums.length; i++) {
          let c = Math.max(b, a + nums[i]);
          a = b;
          b = c;
      }
      return b;
};