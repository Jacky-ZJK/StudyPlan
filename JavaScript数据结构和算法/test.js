// let arr = [1, 2, 3, [1, 2, [1, 2, [1]]], 4]
// let result = []
// function* flat (arr) {
//   for(let item of arr) {
//     if (typeof item !== 'number') {
//       yield* flat(item)
//     }else {
//       yield item
//     }
//   }
// }

// for (let f of flat(arr)) {
//   result.push(f)
//   console.log(result);
// }

// let obj = {}
// function* demo () {
//   yield 1
//   yield 2
//   yield 3
// }
// obj[Symbol.iterator] = demo
// console.log(...obj);

// function sleep(interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(reject, interval);
//   })
// }

// // 用法
// async function one2FiveInAsync() {
//   for(let i = 1; i <= 5; i++) {
//     console.log(i);
//     await sleep(1000);
//   }
// }

// one2FiveInAsync().catch(() => {console.log('err')})

// let lazyLoad = (function () {
//   let clock = null
//   let imgObjs = document.querySelectorAll('img')
//   function init () {
//     document.body.addEventListener('scroll', function () {
//       if (clock) {
//         clearTimeout(clock)
//       }else {
//         clock = setTimeout(() => {
//           checkShow()
//         }, 200)
//       }
//     })
//     checkShow()
//   }

//   function checkShow () {
//     imgObjs.forEach(img => {
//       if (img.getAttribute('isLoaded')) return
//       if (shouldShow(img)) {
//         show(img)
//       }
//     })
//   }

//   function shouldShow (node) {
//     let screenHeight = document.body.clientHeight
//     let scrollHeight = document.body.scrollTop
//     let top = node.offsetTop
//     if (top < screenHeight + screenHeight) {
//       return true
//     }else {
//       return false
//     }
//   }

//   function show (node) {
//     let temp = node.getAttribute('data-img')
//     node.setAttribute('src', temp)
//     node.setAttribute('isLoaded', true)
//   }
  
//   return {
//     init
//   }

// })()

// lazyLoad.init()


// // 构造器函数
// let Parent = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Parent.prototype.sayName = function () {
//   console.log(this.name);
// };
// //自己定义的new方法
// let newMethod = function (Parent, ...rest) {
//   // 1.以构造器的prototype属性为原型，创建新对象；
//   let child = Object.create(Parent.prototype);
//   // 2.将this和调用参数传给构造器执行
//   Parent.apply(child, rest);
//   // 3.返回第一步的对象
//   return child;
// };
// //创建实例，将构造函数Parent与形参作为参数传入
// const child = newMethod(Parent, 'echo', 26);
// child.sayName() //'echo';

// //最后检验，与使用new的效果相同
// child instanceof Parent//true
// child.hasOwnProperty('name')//true
// child.hasOwnProperty('age')//true
// child.hasOwnProperty('sayName')//false
// console.log(Object.create(Parent.prototype));


// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(() => {
//  console.log('setTimeout')
// },0)
// async1()
// new Promise((resolve) => {
//  console.log('promise1')
//  resolve()
// }).then(() => {
//  console.log('promise2')
// })
// console.log('script end')

// let tasks = []
// for (let i = 0; i < 5; i++) {
//   tasks.push(new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(i);
//       resolve(i)
//     }, 1000 * i)
//   }))
// }

// Promise.all(tasks).then(val => {
//   setTimeout(() => {
//     console.log(val[val.length - 1] + 1);
//   }, 1000)
// })

// setTimeout(function() {
//   console.log('timeout1');
// })

// new Promise(function(resolve) {
//   console.log('promise1');
//   for(var i = 0; i < 1000; i++) {
//       i == 99 && resolve();
//   }
//   console.log('promise2');
// }).then(function() {
//   console.log('then1');
// })

// console.log('global1');


// console.log('golb1');

// setTimeout(function() {
//     console.log('timeout1');
//     process.nextTick(function() {
//         console.log('timeout1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout1_then')
//     })
// })

// setImmediate(function() {
//     console.log('immediate1');
//     process.nextTick(function() {
//         console.log('immediate1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate1_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate1_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })

// setTimeout(function() {
//     console.log('timeout2');
//     process.nextTick(function() {
//         console.log('timeout2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout2_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout2_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob2_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob2_promise');
//     resolve();
// }).then(function() {
//     console.log('glob2_then')
// })

// setImmediate(function() {
//     console.log('immediate2');
//     process.nextTick(function() {
//         console.log('immediate2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate2_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate2_then')
//     })
// })


// (async function a () {
//     await function b() {
//         console.log('1');
//     }()
// })()

// let s = '1 + 2 * (3 + 4 * (5 + 6))' //波兰式

// let HTMLTag = 'div,p,a,span'.split(',')
// function makeMap (tag) {
//     let set = {}
//     tag.forEach(item => {
//         set[item] = true
//     })
//     return function (tagName) {
//         return !!set[tagName]
//     }
// }

// let isHTML = makeMap(HTMLTag)
// console.log(isHTML('span'));


// function fnc () {
//     console.log('原始功能');
// }

// let tmpFnc = fnc
// console.log(fnc);

// fnc = function () {
//     console.log('拓展功能');
// }

// fnc()
// tmpFnc()


// let temp = function () {
//     console.log('111111111111');
// }
// let a = temp
// temp = function () {
//     console.log('22222222222');
// }
// a()

// let array_methods = Object.create( Array.prototype )
// console.log(array_methods === Array.prototype);


// class Person {
//     constructor ( option ) {
//         this._data = option.data
//     }
// }

// let person = new Person({
//     data: {
//         name: 'jacky',
//         son: {
//             name: 'mark'
//         }
//     }
// })
 
// for (let key of Object.keys(person._data)) {
//     Object.defineProperty( person, key, {
//         get () {
//             return person._data[ key ]
//         }
//     })
// }
// console.log( person.name );
// console.log( person.son.name );


// let arr = [ 1, 2, 3, 4, 5 ]
// let value = undefined
// for ( let i = arr.length - 1; i >= 0; i--) {
//     Object.defineProperty( arr, i, {
//         get () {
//             console.log( '----' );
//             return value
//         },
//         set ( newValue ) {
//             console.log( '----' );
//             value = newValue
//         }
//     })
// }
// let arr = [ 1, 2, 3, 4, 5 ]

// console.log( Object.keys( arr ) );


// function defineReactive ( target, key, value, enumerable ) {
//     if ( typeof value === 'object' && value !== null ) {
//         observe ( value )
//     }
//     Object.defineProperty ( target, key, {
//       get () {
//         return value
//       },
//       set ( newValue ) {
//         console.log( `设置${ key }的值为：${ newValue }`);
//         value = newValue
//       }
//     })
//   }
  
//   function observe ( o ) {
//     for ( let key of Object.keys( o ) ) {
//       let value = o[ key ]
//       if ( Array.isArray( value ) ) {
//         observe( value )
//       } else {
//         defineReactive( o, key, value, true)
//       }
//     }
//   }

//   let data = {
//       name: 'nihao',
//       property: [ 'nihao', 'hahah', 18, {name: 'jacky', property: [ 1, 2, 3]} ]
//   }
//   observe ( data )
//   data.property[ 3 ].property[ 2 ] = 'mark'
//   console.log( data );
  

// function Find(target, array)
// {
//     let length = array[0].length
//     for (let i = 0; i < array.length; i++) {
//         let start = 0
//         let end = length - 1
//         let mid = Math.floor((start + end) / 2)
        
//         while ( start <= end) {
//             if ( array[ i ][ mid ] > target ) {
//                 end = mid - 1
//             } else if ( array[ i ][ mid ] < target ) {
//                 start = mid + 1
//             } else if ( array[ i ][ mid ] = target ) {
//                 return true
//             }
//             mid = Math.floor((start + end) / 2)
//         }
//     }
//     return false

//     lenX = array.length;
//     lenY = array[0].length;
//     for (let i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
//         if (target > array[i][j]) {
//             j++;
//         }
//         else if (target < array[i][j]) {
//             i--;
//         }
//         else {
//             return true;
//         }
//     }
//     return false
// }


// console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));


// ====================================================================

// function createCurry ( fn, arg ) {
//   let arity = fn.length
//   let args = arg || []

//   return function () {
//     let _args = [].slice.call( arguments )
    
//     ;[].push.apply( args, _args )
    
//     if ( args.length < arity ) {
//       return createCurry.call( this, fn, args )
//     }
//     console.log( args );

//     return fn( ...args )
//   }
// }

// let fn = function ( a, b, c, d ) {
//   console.log( a, b, c, d );
// }

// createCurry( fn, [12] )( 13, 14 )( 15, 16, 17 )


// ====================================================================

// function checkPhone ( phoneNumber ) {
//   return /^1[3578]\d{9}$/.test( phoneNumber )
// }

// console.log( checkPhone( 13250216004 ) );


// function checkEmail( email ) {
//   return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test( email )
// }

// console.log( checkEmail( '1214342311@qq.com' ) );


// function add () {
//   let _args = [].slice.call( arguments )

//   let adder = function () {
//     let _adder = function () {
//       _args.push( ...arguments )
//       return _adder
//     }

//     _adder.valueOf = function () {
//       return _args.reduce( ( a, b ) => {
//         return a + b
//       } )
//     }

//     return _adder
//   }

//   return adder( ..._args )
// }


// // 实现一个add方法，使计算结果能够满足如下预期：
// let a = add(1)(2)(3)
// console.log( a );

// add(1, 2, 3)(4)
// add(1)(2)(3)(4)(5)

// ====================================================================

// function add() {
//   // 第一次执行时，定义一个数组专门用来存储所有的参数
//   var _args = [].slice.call(arguments);

//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var adder = function () {
//       var _adder = function() {
//           [].push.apply(_args, [].slice.call(arguments));
//           return _adder;
//       };

//       // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//       _adder.toString = function () {
//           return _args.reduce(function (a, b) {
//               return a + b;
//           });
//       }

//       return _adder;
//   }
//   return adder.apply(null, [].slice.call(arguments));
// }


// function add() {
//   // 第一次执行时，定义一个数组专门用来存储所有的参数
//   var args = []

//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var adder = function() {
//     args.push.apply(args, [].slice.call(arguments))
//     return adder
//   }
//   adder.toString = function() {
//     return args.reduce((prev, now) => prev + now, 0)
//   }
//   return adder.apply(null, [].slice.call(arguments))
// }
// // 输出结果，可自由组合的参数
// console.log(add(1, 2, 3, 4, 5));  // 15
// console.log(add(1, 2, 3, 4)(5));  // 15
// console.log(add(1)(2)(3)(4)(5));  // 15

// ====================================================================

//柯里化与bind
// function A ( b ) {
//   this.b = b
// }

// A.bind = function(context) {
//   var _this = this;
//   let args = [].slice.call( arguments, 1 )  
//   return function() {
//     args.push( ...arguments )
//     return _this.apply( context, args )
//   }
// }

// let c = {}
// let d = A.bind( c, 12 )()
// console.log( d ,c );

// ====================================================================

// Function.prototype.call = function ( context ) {
//   if ( !context ) {
//     context = typeof window === 'undefined' ? global : window
//   }

//   context.fn = this
//   let args = Array.prototype.slice.call( arguments, 1 )
//   let result = context.fn( args )
//   delete context.fn
//   return result
// }

// ====================================================================

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(123)
//   }, 1000)
// })

// p.then((val) => {
//   console.log(val);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(123)
//     }, 1000)
//   })
// }).then(() => {
//   console.log('----');
// }, (msg) => {
//   console.log(msg);
// })

// ====================================================================

// function my_co ( gen ) {
//   return new Promise((resolve, reject) => {
//     function next (data) {
//       try {
//         var {value, done} = gen.next(data)
//       } catch (e) {
//         reject(e)
//       }
//       if (!done) {
//         Promise.resolve(value).then(data => next(data), reject)
//       } else {
//         resolve(value)
//       }
//     }
//     next()
//   })
// }

// function* gen() {
//   console.log('start')
//   yield new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1000)
//     }, 1000)
//   })

//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve.bind(null, 2000), 2000);
//   })

//   yield 10

//   return 456
// }

// my_co(gen()).then((data) => {
//   console.log(data)
// }).catch((err) => {
//     console.log('err: ', err);
// });

// ====================================================================

// function longestPalindrome(s) {
//   if (s === '') return ''

//   let length = s.length
//   let maxLen = 0
//   let maxEnd = 0
//   let origin = s
//   let reverse = s.split('').reverse().join('')
//   let arr = []
//   for(let i = 0; i < length; i++) {
//     arr[i] = new Array()
//   }
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (origin.charAt(i) == reverse.charAt(j)) {
//         if (i === 0 || j === 0) {
//           arr[i][j] = 1
//         } else {
//           arr[i][j] = arr[i - 1][j - 1] + 1
//         }
//       } else {
//         arr[i][j] = 0
//       }

//       if (arr[i][j] > maxLen) {
//         let beforeRev = length - 1 - j;
//         if (beforeRev + arr[i][j] - 1 == i) { //判断下标是否对应
//             maxLen = arr[i][j];
//             maxEnd = i;
//         }
//       }
//     }
//   }  
  
//   return s.substring(maxEnd - maxLen + 1, maxEnd + 1)
// }

// console.log(longestPalindrome("cbbd"));



function childSum (N, K, arr) {
  arr.unshift(0)
  
  let temp = [arr]
  for (let i = 1; i < N; i++) {
      temp[i] = [0, 0, 0, 0, 0]
  }
  
  for (let i = 1; i <= K; i++) {
      for (let j = 1; j <= N; j++) {
          for (let k = 1; k <= j; k++) {
            temp[i][j] += temp[i - 1][k]
          }
      }
  }
  console.log(temp[K][N]);
  
}
childSum(4, 3,[1, 0, 0, 0])