class KMP {
  constructor (str) {
    this.pmt = [0]
    this.modeStr = str
    this.getPMT(str)
  }
  getPMT (str) {
    if (str === '') return []
    let k = 2
    while (k < str.length) {
      let temp = str.substring(0, k)
      let length = temp.length

      //前缀
      let prefix = temp.substring(0, length - 1).split('').map((item, index) => {
        return temp.substring(0, index + 1)
      })
      
      //后缀
      let suffix = temp.substring(1).split('').map((item, index) => {
        return temp.substring(index + 1)
      })

      let publicLength = 0
      // 比较前缀后缀得出最长公共字符长度
      for (let preItem of prefix) {
        if (suffix.includes(preItem)) {
          publicLength = preItem.length > publicLength ? preItem.length : publicLength
        }
      }
      this.pmt.push(publicLength)
      k++
    }
  }
  searchByStr (str) {
    if (str === '') return -1
    let i = 0, j = 0
    while (i < str.length && j < this.modeStr.length) {
      if (str.charAt(i) === this.modeStr.charAt(j)) {
        j++
      } else if (j > 0) {
        j = this.pmt[j - 1]
        continue
      }
      i++
    }
    if(j === this.modeStr.length){
      console.log(`str1包含str2，索引位置为${i - this.modeStr.length}至${i - 1}`);
    }else{
      console.log('str1不包含str2');
    }
    
  }
}

let kmp = new KMP('abcabdabcd')
kmp.searchByStr('abababcabdabcdbba')