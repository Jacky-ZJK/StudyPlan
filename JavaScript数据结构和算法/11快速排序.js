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

// test
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));