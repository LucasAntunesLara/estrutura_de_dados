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
    console.log('Actual Value: ', value)

    if (this.root === null) {
      console.log('ROOTS: ', this.root)
      this.root = new Node(value)
    } else {
      const node = new Node(value)

      if (value > this.root.value) {
        if (this.root.right === null) {
          this.root.right = node.value

          console.log('aaaaaaaaa', this.root.right)
          // } else {
          //   if (this.root.right.right === null) {
          //     console.log('SADSEJSFKJS')
          //   }
        }
      } else if (value < this.root.value) {
        if (this.root.left !== null) {
          this.root.left = node.value

          console.log('\n\n--')
        }
      }
    }
  }

  teste() {
    console.log('teste: ', this)
  }
}

const tree = new BinaryTree()
tree.insert(5)
tree.insert(9)
tree.insert(3)

tree.teste()

console.log('\n\n')
