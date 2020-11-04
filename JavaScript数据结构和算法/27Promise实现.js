/*
let p = new Promise( (resolve, reject) => {})
p.then( val => {})
*/

/**
 * @param {Function} excutor 
 */
/*
function EasyPromise ( excutor ) {
  let selft = this
  selft.onResolvedCallback = []

  function resolve ( val ) {
    selft.data = val
    selft.onResolvedCallback.forEach( callback => callback( val ))
  }

  excutor( resolve.bind( selft ) )
}

EasyPromise.prototype.then = function ( onResolved ) {
  let selft = this
  
  return new MyPromise( resolve => {
    selft.onResolvedCallback.push( function ( val ) {
      let result = onResolved( selft.data )
      if ( result instanceof MyPromise ) {

        result.then( resolve )
      } else {
        resolve( result )
      }
    })
  })
}

let p = new EasyPromise( resolve => {
  setTimeout( () => {
    resolve( 1 )
  }, 500 )
})
p.then( val => {
  console.log( val );
  return new MyPromise( resolve => {
    setTimeout( () => {
      resolve( 1 )
    }, 500 )
  })
}).then( val => {
  console.log( val );

})
*/

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise ( excutor ) {
  let selft = this
  selft.status = PENDING
  selft.onFulfilled = []
  selft.onRejected = []

  function resolve ( value ) {
    if (selft.status === PENDING) {
      selft.status = FULFILLED
      selft.value = value
      selft.onFulfilled.forEach(callback => callback( value ))
    }
  }

  function reject ( reason ) {
    if (selft.status === PENDING) {
      selft.status = REJECTED
      selft.reason = reason
      selft.onRejected.forEach(callback => callback( reason ))
    }
  }

  try {
    excutor(resolve.bind( selft ), reject.bind( selft ))
  } catch (error) {
    reject( error )
  }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let selft = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  return new MyPromise( (resolve, reject) => {
    selft.onFulfilled.push( ( value ) => {
      let result = onFulfilled( value )
      if ( result instanceof MyPromise ) {
        result.then(resolve, reject)
      } else {
        resolve( result )
      }
    } )
    selft.onRejected.push( ( value ) => {
      let result = onRejected( value )
      if ( result instanceof MyPromise ) {
        result.then(resolve, reject)
      } else {
        reject( result )
      }
    } )
  })

}

let race = function ( promises ) {
  return new Promise((resolve, reject) => {
    if (promises === 0) {
      return
    } else {
      for(let p of promises) {
        Promise.resolve(p).then(value => {
          resolve(value)
          return
        }, err => {
          reject(err)
          return
        })
      }
    }
  })
}

race([
  new Promise((resolve, reject) => { setTimeout(() => { resolve(100) }, 1000) }),
  undefined,
  new Promise((resolve, reject) => { setTimeout(() => { reject(100) }, 100) })
]).then((data) => {
  console.log('success ', data);
}, (err) => {
  console.log('err ',err);
});
