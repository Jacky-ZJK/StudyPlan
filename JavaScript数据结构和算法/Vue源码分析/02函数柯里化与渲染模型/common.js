class JGVue {
  constructor (option) {
    this._data = option.data
    this._template = document.querySelector(option.el)
    this._parent = this._template.parentNode
    this.$el = null

    reactify( this._data, this )
    this.mount()
  }
  mount () {
    this.render = this.createRenderFn()

    this.mountComponent()
  }
  mountComponent () {
    let mount = () => {
      this.update( this.render() )
    }
    mount.call( this )
  }
  createRenderFn () {
    let ast = getAst( this._template )
    return function () {
      return combine( ast, this._data )
    }
  }
  update (virtualDOM) {
    this._parent.replaceChild(compiler(virtualDOM), document.querySelector('#root'))
  }
}

function getAst (node) {
  let _ast = null
  let _nodeType = node.nodeType
  if (_nodeType === 3) {
    let _nodeValue = node.nodeValue
    _ast = new VNode(undefined, undefined, _nodeValue, _nodeType)
  } else if (_nodeType === 1) {
    let _tag = node.nodeName.toLowerCase()
    let _attrs = {}
    let _children = node.childNodes
    for (let attr of node.attributes) {
      _attrs[attr.nodeName] = attr.nodeValue
    }
    _ast = new VNode(_tag, _attrs, undefined, _nodeType)
    for (let child of _children) {
      _ast.appendChild(getAst(child))
    }
  }

  return _ast
}

class VNode {
  constructor (_tag, _attrs, _nodeValue, _nodeType) {
    this._tag = _tag
    this._attrs = _attrs
    this._nodeValue = _nodeValue
    this._nodeType = _nodeType
    this._children = []
  }
  appendChild (vnode) {
    this._children.push(vnode)
  }
}

function combine (ast, data) {
  let r = /\{\{(.+?)\}\}/g
  let _vnode = null
  if (ast._nodeType === 3) {
    _nodeValue = ast._nodeValue.replace(r, (_, g) => getValueByPath(data, g.trim()))
    _vnode = new VNode(undefined, undefined, _nodeValue, ast._nodeType) 
  } else if (ast._nodeType === 1) {
    _vnode = new VNode(ast._tag, ast._attrs, ast._nodeValue, ast._nodeType)
    for (let child of ast._children) {
      _vnode.appendChild(combine(child, data))
    }
  }

  return _vnode
}

function getValueByPath(obj, path) {
  let paths = path.split('.')
  let res = obj
  let prop = null
  while (prop = paths.shift()) {
    res = res[prop]
  }
  return res
}

function compiler (vnode) {
  let el = null
  if (vnode._nodeType === 3) {
    el = document.createTextNode(vnode._nodeValue)
  } else if (vnode._nodeType === 1) {
    el = document.createElement(vnode._tag)
    Object.keys(vnode._attrs).forEach(attr => {
      el.setAttribute(attr, vnode._attrs[attr])
    })
    for (let child of vnode._children) {
      el.appendChild(compiler(child))
    }
  }
  return el
}

let ARRAY_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice',
]


function defineReactive( target, key, value, enumerable ) {
  let that = this

  if (typeof value === 'object' && value != null && !Array.isArray(value)) {
    reactify(value, that)
  }
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: !!enumerable,
    get () {
      return value
    },
    set (newValue) {
      if (typeof newValue === 'object' && newValue !== null) {
        reactify( newValue )
      }
      value = newValue
      if (Array.isArray( newValue )) {
        target[key].__proto__ = array_methods
      }
      
      that.mountComponent()
    }
  })
}

function reactify ( obj, vm ) {
  let keys = Object.keys( obj )
  for (let key of keys) {
    let value = obj[key]
    if (Array.isArray( value )) {
      value.__proto__ = array_methods
      reactify( value, vm )
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'object' && value[i] !== null) {
          reactify( value[i], vm )
        }
      }
    } else {
      defineReactive.call( vm, obj, key, value, true)
    }
  }
}

let array_methods = Object.create( Array.prototype )
ARRAY_METHODS.forEach( method => {
  array_methods[ method ] = function () {
    let res = Array.prototype[ method ].apply( this, arguments )
    reactify(this)
    return res
  }
})