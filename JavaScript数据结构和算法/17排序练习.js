function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}


function bubbleSort (arr) {
  let len = arr.length
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

function selectionSort (arr) {
  let len = arr.length
  for (let  i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }

  return arr
}

function insertionSort (arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1
    let temp = arr[i]

    while (preIndex >= 0 && arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex -= 1
    }
    arr[preIndex + 1] = temp
  }

  return arr
}

function shellSort (arr) {
  let len = arr.length
  let gap = 1
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i]
      let preIndex = i - gap

      while (preIndex >= 0 && arr[preIndex] > temp) {
        arr[preIndex + gap] = arr[preIndex]
        preIndex -= gap
      }
      arr[preIndex + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }

  return arr
}

function mergeSort (arr) {
  let len = arr.length
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  if (len < 2) return arr

  return merge(mergeSort(left), mergeSort(right))
}
function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  return result.concat(left, right)
}

function heapSort (arr) {
  let len = arr.length

  for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
    heapify(arr, i, len)
  }

  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i)
  }

  return arr
}
function heapify (arr, index, size) {
  let largest = index
  let left = index * 2 + 1
  let right = index * 2 + 2

  if (left < size && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== index) {
    swap(arr, index, largest)
    heapify(arr, largest, size)
  }
}

function quickSort (arr) {
  let len = arr.length
  let pivot = arr[0]
  let left = []
  let right = []

  if (len < 2) return arr

  for (let i = 1; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

let arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(quickSort(arr));