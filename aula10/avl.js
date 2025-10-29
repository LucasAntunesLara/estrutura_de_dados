class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVL {
  constructor() {
    this.root = null
  }

  getHeight(node) {
    return node ? node.height : 0
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0
  }

  updateHeight(node) {
    if (node)
      node.height =
        Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  rotateRight(y) {
    const x = y.left
    const T2 = x.right

    x.right = y
    y.left = T2

    this.updateHeight(y)
    this.updateHeight(x)

    return x
  }

  rotateLeft(x) {
    const y = x.right
    const T2 = y.left

    y.left = x
    x.right = T2

    this.updateHeight(x)
    this.updateHeight(y)

    return y
  }

  balanceNode(node) {
    this.updateHeight(node)

    const balance = this.getBalanceFactor(node)

    if (balance > 1 && this.getBalanceFactor(node.left) >= 0)
      return this.rotateRight(node)

    if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left)

      return this.rotateRight(node)
    }

    if (balance < -1 && this.getBalanceFactor(node.right) <= 0)
      return this.rotateLeft(node)

    if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right)

      return this.rotateLeft(node)
    }

    return node
  }

  insertRecursive(node, value) {
    if (node === null) return new Node(value)

    if (value < node.value) node.left = this.insertRecursive(node.left, value)
    else if (value > node.value)
      node.right = this.insertRecursive(node.right, value)
    else return node

    return this.balanceNode(node)
  }

  insert(value) {
    this.root = this.insertRecursive(this.root, value)

    return true
  }

  includes(value) {
    let nodeAtual = this.root

    while (nodeAtual) {
      if (nodeAtual.value === value) return true
      else if (value > nodeAtual.value) nodeAtual = nodeAtual.right
      else nodeAtual = nodeAtual.left
    }

    return false
  }

  min() {
    let n = this.root

    while (n && n.left) n = n.left

    return n ? n.value : null
  }

  max() {
    let n = this.root

    while (n && n.right) n = n.right

    return n ? n.value : null
  }

  printInOrder(node = this.root) {
    if (node) {
      this.printInOrder(node.left)

      console.log(node.value)

      this.printInOrder(node.right)
    }
  }

  getTreeHeight() {
    return this.getHeight(this.root)
  }
}

const tree = new AVL()
// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)
// tree.insert(25)

tree.insert(11)
tree.insert(8)
tree.insert(5)
tree.insert(4)
tree.insert(11)
tree.insert(17)
tree.insert(18)

tree.printInOrder()
console.log('Altura:', tree.getTreeHeight())
console.log('Min:', tree.min())
console.log('Max:', tree.max())
