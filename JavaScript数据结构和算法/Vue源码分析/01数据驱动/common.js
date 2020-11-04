function compiler(template, data) {
  let r = /\{\{(.+?)\}\}/g
  let childNodes = template.childNodes
  for (let node of childNodes) {
    if (node.nodeType === 3) {
      node.nodeValue = node.nodeValue.replace(r, (_, g) => getValueByPath(data, g.trim()))
    } else if (node.nodeType === 1) {
      compiler(node, data)
    }
  }
}

function getValueByPath (obj, path) {
  let paths = path.split('.')
  let prop = null
  let res = obj
  while (prop = paths.shift()) {
    res = res[prop]
  }

  return res
}



function getVirtualDOM () {

}
