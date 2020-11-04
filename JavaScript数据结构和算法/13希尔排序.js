function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}


function shellSort (arr) {
  let len = arr.length
  let gap = 1
  while (gap < len / 3) {
    gap = gap * 3 + 1;
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
    gap = Math.floor(gap/2)
  }

  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(shellSort(arr));