import a from './a'
console.log(a);

console.log(module.hot);

/*热更新*/
// if (module.hot) {
//   module.hot.accept('./a', () => {
//     import a from './a'
//     console.log(a);
//   })
// }

let button = document.createElement('button')
button.innerHTML = 'hello'
button.addEventListener('click', function () {
  console.log('click');
  import('./a').then(data => {
    console.log(data.default);
    
  })
})
document.body.appendChild(button)

let input = document.createElement('input')

document.body.appendChild(input)
