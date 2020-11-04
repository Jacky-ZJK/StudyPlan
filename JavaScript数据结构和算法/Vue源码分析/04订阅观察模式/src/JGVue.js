class JGVue {
  constructor ( option ) {
    this._data = option.data
    this._template = document.querySelector( option.el )
    this._parent = this._template.parentNode
    this._selector = option.el
    //将数据进行响应式化处理
    this.initData()

    this.mount()
  }
}

JGVue.prototype.mount = function () {
  this.render = this.createRenderFn()

  this.mountComponent()
}

JGVue.prototype.mountComponent = function () {
  let mount = () => {
    this.update( this.render() )
  }

  new Watcher( this, mount )
}

JGVue.prototype.createRenderFn = function () {
  let ast = getAst( this._template )

  return function () {
    return combine( ast, this._data )
  }
}

JGVue.prototype.update = function ( virtualDOM ) {
  let realDOM = compiler( virtualDOM )
  this._parent.replaceChild( realDOM, document.querySelector( this._selector ))
  
}