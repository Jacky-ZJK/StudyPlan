let ARRAY_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'splice',
]

let array_methods = Object.create( Array.prototype )
ARRAY_METHODS.forEach( method => {
  array_methods[ method ] = function () {
    let res = Array.prototype[ method ].apply( this, arguments )
    observe ( this )
    return res
  }
})


function defineReactive ( target, key, value, enumerable ) {
  if ( typeof value === 'object' && value !== null ) {
    observe ( value )
  }

  let dep = new Dep()

  Object.defineProperty ( target, key, {
    get () {

      dep.depend()

      return value
    },
    set ( newValue ) {
      if ( value === newValue ) return;

      console.log( `设置${ key }的值为：${ newValue }`);

      value = newValue
      if ( typeof value === 'object' && value !== null ) {
        Array.isArray( value ) && ( value.__proto__ = array_methods )
        observe ( value )
      }

      dep.notify()
    }
  })
}

function observe ( o ) {
  for ( let key of Object.keys( o ) ) {
    let value = o[ key ]
    if ( Array.isArray( value ) ) {
      value.__proto__ = array_methods
      observe ( value )
    } else {
      defineReactive( o, key, value, true)
    }
  }
}

JGVue.prototype.initData = function () {
  observe ( this._data )

}