/**解构赋值 */
// let [a, b]: [number, number] = [1, "asd"]; //err
let [a, b]: [number, number] = [1, 2];
console.log(a, b);

let {o, ...j} = {o: 100, h: 12, k: 13, j:14};
console.log(o, j);