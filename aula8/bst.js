class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)

    if (this.root == null) {
      this.root = node
      return true
    }

    let nodeAtual = this.root

    while (true) {
      if (nodeAtual.value === value) return false

      if (value > nodeAtual.value) {
        if (nodeAtual.right === null) {
          nodeAtual.right = node

          return true
        }
        nodeAtual = nodeAtual.right
      } else {
        if (nodeAtual.left === null) {
          nodeAtual.left = node

          return true
        }
        nodeAtual = nodeAtual.left
      }
    }
  }

  search(value) {
    let nodeAtual = this.root

    while (nodeAtual !== null) {
      if (nodeAtual.value === value) return true

      nodeAtual = value > nodeAtual.value ? nodeAtual.right : nodeAtual.left
    }

    return false
  }

  crescente() {
    let array = []

    function inOrder(node) {
      if (node === null) return
      inOrder(node.left)
      array.push(node.value)
      inOrder(node.right)
    }

    inOrder(this.root)
    return array
  }

  getHeight() {
    function height(node) {
      if (node === null) return 0

      const leftHeight = height(node.left)
      const rightHeight = height(node.right)

      return 1 + Math.max(leftHeight, rightHeight)
    }

    return height(this.root)
  }

  countNodes() {
    function nodes(node) {
      if (node === null) return 0

      return 1 + nodes(node.left) + nodes(node.right)
    }

    return nodes(this.root)
  }

  countLeaves() {
    function leaves(node) {
      if (node === null) return 0
      if (node.left === null && node.right === null) return 1
      return leaves(node.left) + leaves(node.right)
    }

    return leaves(this.root)
  }
}

const tree = new BST()

tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(15)
tree.insert(12)
tree.insert(13)

console.log(tree.countLeaves())
