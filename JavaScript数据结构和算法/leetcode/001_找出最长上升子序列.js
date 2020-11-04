/*
给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
*/

/* 普通迭代算法 */
var lengthOfLIS1 = function(nums) {
  if ( nums.length === 0 ) return 0
  let length = nums.length
  let dp = [ 1 ]
  let maxLength = 1
  for ( let i = 1; i < length; i++ ) {
      let maxval = 0
      for ( let j = 0; j < i; j++ ) {
          if ( nums[ i ] > nums[ j ] ) {
              maxval = Math.max( maxval, dp[ j ] )
          }
      }
      dp[ i ] = maxval + 1
      maxLength = Math.max(maxLength, dp[ i ])
  }
  return maxLength
};


/* 贪心 + 二分查找 */
function lengthOfLIS2 ( nums ) {
  let length = nums.length
  if ( length < 1 ) return 0
  let dp = [ nums[ 0 ] ]
  for ( let i = 1; i < length; i++ ) {
    if ( dp[ dp.length - 1 ] < nums[ i ]) {
      dp.push( nums[ i ] )
    } else {
      let pos = -1
      let start = 0
      let end = dp.length
      while ( start <= end ) {
        let mid = Math.floor( ( start + end ) / 2 )
        if ( dp[ mid ] < nums[ i ] ) {
          pos = mid 
          start += 1
        } else {
          end -= 1
        }
      }
      dp[ pos + 1 ] = nums[ i ]
    }
  }

  return dp.length
}

let res = lengthOfLIS2( [0, 8, 4, 12, 2] )
console.log( res );
