function deepClone (obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)

  let newObj = new obj.constructor
  for (let key in obj) {
    newObj[key] = deepClone(obj[key])
  }

  return newObj
}


let arr = [1, 2, 3, 4, 5, 6]
let obj = {
  name: 'jakcy',
  age: 18
}
let newArr = deepClone(arr)
let newObj = deepClone(obj)
console.log(newObj, obj === newObj);
