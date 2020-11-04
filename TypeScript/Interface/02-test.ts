interface Named {
  name: string;
}

let x: Named;
let y = {name: "jacky", age: 18};
x = y;
console.log(x);
console.log(y);
