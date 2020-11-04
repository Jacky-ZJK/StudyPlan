/**
 * 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

示例 1:

输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
示例 2:

输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
提示：

0 <= A.length <= 40000
0 <= A[i] < 40000
 */

var minIncrementForUnique = function(A) {
  let count = 0
  let length = A.length
  A = quickSort(A)
  console.log(A);
  
  for (let i = 1; i < length; i++) {
    if (A[i] <= A[i - 1]) {
      let pre = A[i]
      A[i] = A[i - 1] + 1
      count += A[i] - pre
    }
  }
  return count
};

var minIncrementForUnique1 = function(A) {
  let count = 0
  let result = []
  for (let item of A) {
    let b = findPos(item)
    count += b - item
  }

  function findPos (num) {
    if (result[num] === undefined) {
      result[num] = num
      return num
    }
    let b = findPos(num + 1)
    return b
  }

  return count
};
function quickSort(arr) {
  let pivot = arr[0]
  let left = []
  let right = []

  if (arr.length < 2) {
    return arr
  }

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(minIncrementForUnique([3,3,0,2,0,9,2,11,10,14,5,13,6,5,1]));