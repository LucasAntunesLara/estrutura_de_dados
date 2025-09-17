class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)

    if (this.root == null) {
      this.root = node
      return true
    }

    let node_atual = this.root

    while (true) {
      if (node_atual.value === value) return false

      if (value > node_atual.value) {
        if (node_atual.right === null) return (node_atual.right = node)

        node_atual = node_atual.right
      } else {
        if (node_atual.left === null) return (node_atual.left = node)

        node_atual = node_atual.left
      }
    }
  }
}

const tree = new BinaryTree()
tree.insert(5)
console.log(tree.insert(7))
tree.insert(9)
tree.insert(3)

console.log('\n\n')
