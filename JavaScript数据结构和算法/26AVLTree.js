class AVLTreeNode {
  constructor (key) {
    this.key = key
    this.leftChild = null
    this.rightChild = null
    this.parent = null
  }
}

class AVLTree {
  constructor (keyName) {
    this.root = null 
  }
}
//这是我们计算当前节点的高度的方法,递归计算
AVLTree.prototype.getHeight = function (node) {
  if (node === null) {
    return 0
  }

  return Math.max(this.getHeight(node.leftChild), this.getHeight(node.rightChild)) + 1
}

//向左的单旋转
AVLTree.prototype.rotateLL = function (node) {
  let temp = node.rightChild
  node.rightChild = temp.leftChild
  temp.leftChild = node
  return temp
}

//向右的单旋转
AVLTree.prototype.rotateRR = function (node) {
  let temp = node.leftChild
  node.leftChild = temp.rightChild
  temp.rightChild = node
  return temp
}

//先左后右双旋转
AVLTree.prototype.rotateLR = function (node) {
  node.leftChild = this.rotateLL(node.leftChild)
  return this.rotateRR(node)
}

//先右后左双旋转
AVLTree.prototype.rotateRL = function (node) {
  node.rightChild = this.rotateRR(node.rightChild)
  return this.rotateLL(node)
}

//方法保证 整颗树平衡
AVLTree.prototype.checkIsBalance = function (node) {
  if (node === null) return node

  // 左子树高度比右子树高度大   父节点平衡因子为-2 
  if (this.getHeight(node.leftChild) - this.getHeight(node.rightChild) > 1) {
    if (this.getHeight(node.leftChild.leftChild) >= this.getHeight(node.leftChild.rightChild)) {
      // 如果左子树的左子树高度大于等于左子树的右子树高度  左子节点为-1和0
      // 直接进行右单旋
      node = this.rotateRR(node)
    } else {
      //如果左子节点为1，需要先左后右双旋
      node = this.rotateLR(node)
    }
    // 右子树高度比左子树高度大1以上  父节点平衡因子为2
  } else if (this.getHeight(node.rightChild) - this.getHeight(node.leftChild) > 1) { 
    if (this.getHeight(node.rightChild.rightChild) >= this.getHeight(node.rightChild.leftChild)) {
      // 如果右子树的右子树高度大于等于右子树的左子树高度
      // 直接进行左单旋
      node = this.rotateLL(node)
    } else {
      node = this.rotateRL(node)
    }
  }

  return node
}

AVLTree.prototype.insertNode = function (node, newNode) {
  if (node === null) {
    node = newNode
    return node
  } else if (node.key > newNode.key) {
    // 在左子树里插入
    if (node.leftChild === null) {
      node.leftChild = newNode
      return node
    } else {
      node.leftChild = this.insertNode(node.leftChild, newNode)
      node = this.checkIsBalance(node)
    }
  } else if (node.key < newNode.key) {
    //右子树里插入
    if (node.rightChild === null) {
      node.rightChild = newNode
      return node
    } else {
      node.rightChild = this.insertNode(node.rightChild, newNode)
      node = this.checkIsBalance(node)
    }
  }

  return node
}

AVLTree.prototype.insert = function (key) {
  let newNode = new AVLTreeNode(key)
  this.root = this.insertNode(this.root, newNode)
}

AVLTree.prototype.frontOder = function () {
  if (this.root === null) return []
  let result = []
  let stack = [ this.root ]
  
  while (stack.length !== 0) {
    let temp = stack.pop()
    if (temp.rightChild) stack.push(temp.rightChild)
    if (temp.leftChild) stack.push(temp.leftChild)
    result.push(temp.key)    
  }
  return result
}

let avlTree = new AVLTree()
avlTree.insert(2)
avlTree.insert(4)
avlTree.insert(6)
avlTree.insert(8)
avlTree.insert(10)
avlTree.insert(12)

console.log(avlTree.frontOder());
