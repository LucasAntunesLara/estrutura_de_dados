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

  includes(value) {
    let nodeAtual = this.root

    let resposta = null

    while (resposta === null) {
      //   console.log(typeof value)
      console.log(typeof nodeAtual.value)
      if (nodeAtual.value === value) resposta = true
      else {
        if (value > nodeAtual.value) {
          // if (nodeAtual.right > value) return (nodeAtual.right = node)

          nodeAtual = nodeAtual.right
        } else {
          //if (value < nodeAtual.value) {
          nodeAtual = nodeAtual.left
          // resposta = false
        }
      }

      //   else {
      // if (nodeAtual.left === null) return (nodeAtual.left = node)

      // nodeAtual = nodeAtual.left
      //   }
    }

    return resposta
  }
}

const tree = new BinaryTree()
tree.insert(5)
tree.insert(7)
tree.insert(9)
tree.insert(3)
// tree.insert(0)

console.log('5: ', tree.includes(5))
console.log('7: ', tree.includes(7))
console.log('9: ', tree.includes(9))
console.log('3: ', tree.includes(3))
console.log('0: ', tree.includes(0))

console.log('\n\n')
