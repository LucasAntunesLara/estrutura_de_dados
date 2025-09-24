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
        if (nodeAtual.right === null) return (nodeAtual.right = node)

        nodeAtual = nodeAtual.right
      } else {
        if (nodeAtual.left === null) return (nodeAtual.left = node)

        nodeAtual = nodeAtual.left
      }
    }
  }

  search(value) {
    let nodeAtual = this.root

    while (nodeAtual <= this.root) {
      if (nodeAtual.value === value) return true
      else
        value > nodeAtual.value
          ? (nodeAtual = nodeAtual.right)
          : (nodeAtual = nodeAtual.left)
    }

    return false
  }

  crescente() {
    let n = []
    let nodeAtual = this.root

    while (nodeAtual.right !== null) {
      let x = nodeAtual
      let j = x.value

      for (let i = j; i >= 0; i--) {
        n.push(j)
        console.log('x', x)
        i--
      }

      n.push(nodeAtual.value)

      nodeAtual = nodeAtual.right
    }

    return n
  }

  getHeight() {}

  countNodes() {}

  countLeaves() {
    let nodeAtual = this.root
    let leavesNumber = 0

    while (true) {
      for (let i = 0; i <= 0; i++) {
        if (nodeAtual.right === null) leavesNumber++

        nodeAtual = nodeAtual.right
      }

      if (nodeAtual.right === null) leavesNumber++
    }
  }
}

const tree = new BST()

tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(15)
tree.insert(12)
tree.insert(69)

// console.log('10: ', tree.search(10))
// console.log('5: ', tree.search(5))
// console.log('3: ', tree.search(3))
// console.log('7: ', tree.search(7))
// console.log('15: ', tree.search(15))
// console.log('12: ', tree.search(12))

// console.log('13: ', tree.search(13))
// console.log('20: ', tree.search(20))
// console.log('22: ', tree.search(22))
// console.log('22: ', tree.search(69))

console.log(tree.crescente())
console.log('\n\n')
