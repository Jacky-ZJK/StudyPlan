import { add } from './common/js/common'

let res = add( 1, 2 )

let mul = (a, b) => {
  return a * b
}

let ret = mul( 1, 2 )

console.log( res )
console.log( ret )

const isHas = [1,2,3].includes(2);

const p = new Promise((resolve, reject) => {
    resolve(100);
});
p.then(val => {
  console.log(val);
  
})

