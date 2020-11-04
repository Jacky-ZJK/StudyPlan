function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex -= 1
    }
    arr[preIndex + 1] = temp
  }

  return arr
}

function binaryInsertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let start = 0
    let end = i - 1
    let mid = Math.floor((start + end) / 2)
    let temp = arr[i]

    while (start <= end) {
      if (arr[mid] <= temp) {
        start = mid + 1
      }else {
        end = mid - 1
      }
      mid = Math.floor((start + end) / 2)
    }

    for (let preIndex = i - 1; preIndex >= start; preIndex--) {
      arr[preIndex + 1] = arr[preIndex]
    }
    arr[start] = temp
  }

  return arr
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(binaryInsertionSort(arr));

