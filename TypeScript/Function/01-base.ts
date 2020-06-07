/**
 * 函数完整定义
 */
let Add: (x: number, y: number, z?: number) => number;
Add = function (x: number, y:number = 10, z?: number): number { return x + y;}

/**
 * 默认参数
 * 
 * 默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
 */
function Add1(x:number = 20, y: number): number {
  return x + y;
}
Add1(undefined, 10);

/**
 * 剩余参数
 */
function Add2(x: number = 20, y: number, ...z: number[]) {
  let ret = x + y;
  for(let item of z) {
    ret += item;
  }
  return ret;
}
console.log(Add2(undefined, 20, 10, 10, 25, 30));