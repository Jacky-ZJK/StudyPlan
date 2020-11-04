class RBTreeNode {
  constructor (key) {
    this.key = key
    this.color = 'red'
    this.parent = null
    this.right = null
    this.left = null
  }
}

class RBTree {
  constructor () {
    this.root = null
  }
}

RBTree.prototype.insert = function (node) {
  // 以二叉搜索树的方式插入结点

  // 如果根结点不存在，则结点作为根结点

  // 如果结点的值小于node，且结点的右子结点不存在，跳出循环

  // 如果结点的值大于等于node，且结点的左子结点不存在，跳出循环

  if (this.root === null) {
    this.root = node
  } else {
    let cur = this.root
    while (cur[node.key <= cur.key ? 'left' : 'right']) {
      cur = cur[node.key <= cur.key ? 'left' : 'right']
    }
    cur[node.key <= cur.key ? 'left' : 'right'] = node
    node.parent = cur
  }
  this._fixTree(node)
  return this
}

RBTree.prototype._fixTree = function (node) {
  // 当node.parent不存在时，即为情形1，跳出循环
  // 当node.parent.color === 'black'时，即为情形2，跳出循环

  //情形3
  while (node.parent && node.parent.color !== 'black') {
    let father = node.parent
    let grand = father.parent
    let uncle = grand[grand.left === father ? 'right' : 'left'] 

    if (!uncle || uncle.color === 'black') {
      let directionFromFatherToNode = father.left === node ? 'left' : 'right'
      let directionFromGrandToFather = grand.left === father ? 'left' : 'right'
      if (directionFromFatherToNode === directionFromGrandToFather) {
        // 具体情形一或二
        // 旋转
        this._rotate(father)
        // 变色
        father.color = 'black'
        grand.color = 'red'
      } else {
        // 具体情形三或四
        // 旋转
        this._rotate(node)
        this._rotate(node)
        // 变色
        node.color = 'black'
        grand.color = 'red'
      }
      break
    } else {
      // 情形3.2
      // 变色
      grand.color = 'red'
      father.color = 'black'
      uncle.color = 'black'
      // 将grand设为新的node
      node = grand
    }
  }
  if (!node.parent) {
    // 如果是情形1
    node.color = 'black'
    this.root = node
  }
}

RBTree.prototype._rotate = function (node) {
  // 旋转 node 和 node.parent
  let y = node.parent
  if (y.right === node) {
    if (y.parent) {
      y.parent[y.parent.left === y ? 'left' : 'right'] = node
    }
    node.parent = y.parent
    if (node.left) {
      node.left.parent = y
    }
    y.right = node.left
    node.left = y
    y.parent = node
  } else {
    if (y.parent) {
      y.parent[y.parent.left === y ? 'left' : 'right'] = node
    }
    node.parent = y.parent
    if (node.right) {
      node.right.parent = y
    }
    y.left = node.right
    node.right = y
    y.parent = node
  }
 }
 RBTree.prototype.frontOder = function () {
  if (this.root === null) return []
  let result = []
  let stack = [ this.root ]
  
  while (stack.length !== 0) {
    let temp = stack.pop()
    if (temp.right) stack.push(temp.right)
    if (temp.left) stack.push(temp.left)
    result.push([temp.key, temp.color])    
  }
  return result
}

 let arr = [11, 2, 14, 1, 7, 15, 5, 8, 4, 16]
 let tree = new RBTree()
 arr.forEach(i => tree.insert(new RBTreeNode(i)))
 console.log(tree.frontOder());
 