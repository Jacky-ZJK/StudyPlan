function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function heapSort (arr) {
  let size = arr.length
  for(let i = Math.floor(size/2 - 1); i >=0; i--) {
    heapify(arr, i, size)
  }

  for (let i = size - 1; i > 0; i--) {
    swap(arr, 0, i)
    size -= 1
    heapify(arr, 0, size)
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

var arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22];
console.log(heapSort(arr));