function getAst ( template ) {
  let ast = null
  let nodeType = template.nodeType
  if ( nodeType === 3) {
    let nodeValue = template.nodeValue
    ast = new VNode( undefined, undefined, nodeValue, nodeType)
  } else if ( nodeType === 1){
    let tag = template.nodeName
    let attrs = {}
    for ( let attr of template.attributes ) {
      attrs[attr.nodeName] = attr.nodeValue
    }
    ast = new VNode( tag, attrs, undefined, nodeType)
    let children = template.childNodes
    for ( let child of children ) {
      ast.appendChild( getAst( child ) )
    }
  }

  return ast
}