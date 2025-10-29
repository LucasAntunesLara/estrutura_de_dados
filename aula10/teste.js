class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class BST {
  constructor() {
    this.root = null
  }

  // helper: retorna altura de um nó (0 se null)
  height(node) {
    return node ? node.height : 0
  }

  // rotações
  rotateRight(y) {
    const x = y.left
    const T2 = x.right

    x.right = y
    y.left = T2

    y.height = 1 + Math.max(this.height(y.left), this.height(y.right))
    x.height = 1 + Math.max(this.height(x.left), this.height(x.right))

    return x
  }

  rotateLeft(x) {
    const y = x.right
    const T2 = y.left

    y.left = x
    x.right = T2

    x.height = 1 + Math.max(this.height(x.left), this.height(x.right))
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right))

    return y
  }

  // insert mantendo estilo iterativo; retorna true se inseriu, false se duplicado
  insert(value) {
    const node = new Node(value)

    if (this.root == null) {
      this.root = node
      return true
    }

    let atual = this.root
    let parent = null
    const stack = [] // ancestrais até o local de inserção

    while (atual !== null) {
      stack.push(atual)
      if (atual.value === value) return false

      parent = atual

      if (value > atual.value) atual = atual.right
      else atual = atual.left
    }

    // anexar novo nó ao pai
    if (value > parent.value) parent.right = node
    else parent.left = node
    stack.push(node)

    // rebalancear percorrendo a pilha de baixo pra cima
    for (let i = stack.length - 1; i >= 0; i--) {
      const n = stack[i]
      n.height = 1 + Math.max(this.height(n.left), this.height(n.right))
      const balance = this.height(n.left) - this.height(n.right)

      if (balance > 1) {
        // Left cases
        if (this.height(n.left.left) >= this.height(n.left.right)) {
          // Left Left
          const newRoot = this.rotateRight(n)
          if (i > 0) {
            const p = stack[i - 1]
            if (p.left === n) p.left = newRoot
            else p.right = newRoot
          } else {
            this.root = newRoot
          }
        } else {
          // Left Right
          n.left = this.rotateLeft(n.left)
          const newRoot = this.rotateRight(n)
          if (i > 0) {
            const p = stack[i - 1]
            if (p.left === n) p.left = newRoot
            else p.right = newRoot
          } else {
            this.root = newRoot
          }
        }
      } else if (balance < -1) {
        // Right cases
        if (this.height(n.right.right) >= this.height(n.right.left)) {
          // Right Right
          const newRoot = this.rotateLeft(n)
          if (i > 0) {
            const p = stack[i - 1]
            if (p.left === n) p.left = newRoot
            else p.right = newRoot
          } else {
            this.root = newRoot
          }
        } else {
          // Right Left
          n.right = this.rotateRight(n.right)
          const newRoot = this.rotateLeft(n)
          if (i > 0) {
            const p = stack[i - 1]
            if (p.left === n) p.left = newRoot
            else p.right = newRoot
          } else {
            this.root = newRoot
          }
        }
      }
      // continuar para atualizar ancestrais
    }

    return true
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

  // getHeight agora usa altura armazenada no root
  getHeight() {
    return this.height(this.root)
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
