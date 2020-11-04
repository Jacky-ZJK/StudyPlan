function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function bubbleSort1 (arr) {
  let count = 0
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      count += 1
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return {
    count,
    arr
  }
}

function bubbleSort2 (arr) {
  let count = 0
  let i = arr.length - 1
  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      count += 1
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        pos = j
      }
    }
    i = pos
  }

  return {
    count,
    arr
  }
}


function bubbleSort3 (arr) {
  let count = 0
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    for (let j = 0; j < end; j++) {
      count += 1
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    end -= 1

    for (let j = end; j > 0; j--) {
      count += 1
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
    start +=1
  }

  return {
    count,
    arr
  }
}

function bubbleSort4 (arr) {
  let count = 0
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let startPos = 0
    let endPos = 0
    for (let j = 0; j < end; j++) {
      count += 1
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        endPos = j
      }
    }
    end = endPos

    for (let j = end; j > 0; j--) {
      count += 1
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
        startPos = j
      }
    }
    start = startPos
  }

  return {
    count,
    arr
  }
}

function bubbleSort5 (arr, condition) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (condition(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

let arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort5(arr, (a, b) => a < b));