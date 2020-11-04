function compiler ( virtualDOM ) {
  let nodeType = virtualDOM._nodeType
  let realDOM = null
  if ( nodeType === 3 ) {
    realDOM = document.createTextNode( virtualDOM._nodeValue )
  } else if ( nodeType === 1 ) {
    realDOM = document.createElement( virtualDOM._tag )

    let attrs = virtualDOM._attrs
    for (let attr in attrs ) {
      realDOM.setAttribute( attr, attrs[ attr ])
    }

    for ( let child of virtualDOM._children ) {
      realDOM.appendChild( compiler( child ) )
    }
  } 

  return realDOM
}

function combine ( ast, data) {
  let r = /\{\{(.+?)\}\}/g
  let vnode = null
  let nodeType = ast._nodeType
  if ( nodeType === 3 ) {
    let value = ast._nodeValue.replace( r, ( _, g) => getValueByPath( data, g.trim() ))
    vnode = new VNode( undefined, undefined, value, nodeType)
  } else if ( nodeType === 1) {
    vnode = new VNode( ast._tag, ast._attrs, undefined, ast._nodeType)
    for ( let child of ast._children ) {
      vnode.appendChild( combine( child, data) )
    }
  }

  return vnode
}

function getValueByPath ( o, path) {
  let paths = path.split( '.' )
  let prop = null
  let res = o
  while ( prop = paths.shift() ) {
    res = res[ prop ]
  }

  return res
}