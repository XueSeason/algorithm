var arr = [5, 6, 4, 7, 3, 8, 2, 9, 1]

function node(data) {
  this.value = data
  this.left = null
  this.right = null
}

function BST() {
  this.root = null
}

BST.prototype.push = function(value) {
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
    ctx.push(item)
  })
}


var tree = new BST()
tree.initByArr(arr)
tree.traverse(function (value) {
  console.log(value)
})
// console.log(tree)
// tree.invert()
// console.log(tree)
