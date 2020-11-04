// import $ from 'jquery'

// console.log($('#app'));

import img from './11.jpg'

console.log(img);


let image = new Image()
image.src = img
document.body.appendChild(image)

let a = require('./a')

class A {
  a = 1
}

console.log(a);

require('./index.css')
require('./a.less')