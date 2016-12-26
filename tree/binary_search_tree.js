var arr = [5, 8, 3, 1, 2, 4, 6, 7, 9]

function node(data) {
  this.value = data
  this.left = null
  this.right = null
}

function BST() {
  this.root = null
}

BST.prototype.insert = function(value) {
  if (this.root === null) {
    this.root = new node(value)
    return
  }

  var currentNode = this.root
  var newNode = new node(value)
  while(currentNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }
}

BST.prototype.delete = function(value) {
  if (this.root === null) {
    return
  }

  var parentNode = null
  var currentNode = this.root
  while(currentNode !== null && currentNode.value !== value) {
    parentNode = currentNode
    if (value < currentNode.value) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }

  // BST 上没有该值
  if (currentNode === null) {
    return
  }

  if (currentNode.left === null && currentNode.right === null) {
    if (currentNode === parentNode.left) {
      parentNode.left = null
    } else {
      parentNode.right = null
    }
  } else if (currentNode.left === null) {
    if (currentNode === parentNode.left) {
      parentNode.left = currentNode.right
    } else {
      parentNode.right = currentNode.right
    }
    currentNode = null
  } else if (currentNode.right === null) {
    if (currentNode === parentNode.left) {
      parentNode.left = currentNode.left
    } else {
      parentNode.right = currentNode.left
    }
  } else {
    // 有两个孩子的情况，当前结点与左子树中最大的元素交换，然后删除当前结点。
    // 左子树最大的元素一定是叶子结点，交换后，当前结点即为叶子结点，删除参考没有孩子的情况。
    // 另一种方法是，当前结点与右子树中最小的元素交换，然后删除当前结点。
    var leftNode = currentNode.left
    var leftParentNode = currentNode
    while(leftNode.right !== null) {
      leftParentNode = leftNode
      leftNode = leftNode.right
    }
    currentNode.value = leftNode.value
    leftParentNode.right = null
  }
}

BST.prototype.traverse = function (callback) {
  function _traverse(node, cb) {
    if (node === null) {
      return
    }
    _traverse(node.left, cb)
    cb(node.value)
    _traverse(node.right, cb)
  }

  _traverse(this.root, callback)
}

BST.prototype.invert = function () {
  function _invert(node) {
    if (node === null) {
      return
    }

    var temp = node.left
    node.left = node.right
    node.right = temp

    if (node.left !== null) {
      _invert(node.left)
    }

    if (node.right !== null) {
      _invert(node.right)
    }
  }
  _invert(this.root)
}

BST.prototype.initByArr = function(arr) {
  var ctx = this
  arr.forEach(function(item) {
    ctx.insert(item)
  })
}


var tree = new BST()
tree.initByArr(arr)
console.log(tree)
tree.delete(3)
tree.traverse(function (value) {
  console.log(value)
})
console.log(tree)
// tree.invert()
// console.log(tree)
