// 特点：独一无二 永远不相等
let sym1 = Symbol('jacky')
let sym2 = Symbol('jacky')
console.log(sym1 === sym2);

// 声明的Symbol属性是不可枚举的 for - in 可以遍历自身属性和原型上的属性
let obj = {
  [sym1]: 'jacky',
  age: 18
}

for (let key in obj) {
  console.log(obj[key]);
}

console.log(Object.getOwnPropertySymbols(obj));

let instance = {
  [Symbol.hasInstance] (obj) {
    return 'name' in obj
  }
}
console.log({name: 'jacky'} instanceof instance);

let arr = [1, 2, 3];
arr[Symbol.isConcatSpreadable] = false; // 拼接数组时不展开
console.log([].concat(arr, [1, 2, 3]));


//species 衍生对象
class MyArray extends Array {
  constructor(...args) {
      super(...args)
  }
  // 强制修改一下
  static get [Symbol.species]() {
      return Array
  }
}
let v = new MyArray(1, 2, 3);
let c = v.map(item => item*=2); // c是v的衍生对象
console.log(c instanceof MyArray)




