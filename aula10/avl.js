class No {
  constructor(value) {
    this.valor = value
    this.esquerda = null
    this.direita = null
    this.altura = 1
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  getAltura(node) {
    return node ? node.altura : 0
  }

  getFatorBalanceamento(node) {
    return node
      ? this.getAltura(node.esquerda) - this.getAltura(node.direita)
      : 0
  }

  atualizarAltura(node) {
    if (node)
      node.altura =
        Math.max(this.getAltura(node.esquerda), this.getAltura(node.direita)) +
        1
  }

  rotacaoDireita(y) {
    const x = y.esquerda
    const T2 = x.direita

    x.direita = y
    y.esquerda = T2

    this.atualizarAltura(y)
    this.atualizarAltura(x)

    return x
  }

  rotacaoEsquerda(x) {
    const y = x.direita
    const T2 = y.esquerda

    y.esquerda = x
    x.direita = T2

    this.atualizarAltura(x)
    this.atualizarAltura(y)

    return y
  }

  balanceNo(node) {
    this.atualizarAltura(node)

    const fb = this.getFatorBalanceamento(node)

    if (fb > 1 && this.getFatorBalanceamento(node.esquerda) >= 0)
      return this.rotacaoDireita(node)

    if (fb > 1 && this.getFatorBalanceamento(node.esquerda) < 0) {
      node.esquerda = this.rotacaoEsquerda(node.esquerda)
      return this.rotacaoDireita(node)
    }

    if (fb < -1 && this.getFatorBalanceamento(node.direita) <= 0)
      return this.rotacaoEsquerda(node)

    if (fb < -1 && this.getFatorBalanceamento(node.direita) > 0) {
      node.direita = this.rotacaoDireita(node.direita)
      return this.rotacaoEsquerda(node)
    }

    return node
  }

  insertRecursive(node, value) {
    if (node === null) return new No(value)

    if (value < node.valor)
      node.esquerda = this.insertRecursive(node.esquerda, value)
    else if (value > node.valor)
      node.direita = this.insertRecursive(node.direita, value)
    else return node

    return this.balanceNo(node)
  }

  insert(value) {
    this.root = this.insertRecursive(this.root, value)

    return true
  }

  includes(value) {
    let nodeAtual = this.root

    while (nodeAtual) {
      if (nodeAtual.valor === value) return true
      else if (value > nodeAtual.valor) nodeAtual = nodeAtual.direita
      else nodeAtual = nodeAtual.esquerda
    }

    return false
  }

  min() {
    let n = this.root

    while (n && n.esquerda) n = n.esquerda

    return n ? n.valor : null
  }

  max() {
    let n = this.root

    while (n && n.direita) n = n.direita

    return n ? n.valor : null
  }

  getAlturaArvore() {
    return this.getAltura(this.root)
  }
}

const tree = new AVLTree()
tree.insert(30)
tree.insert(20)
tree.insert(40)
tree.insert(10)
tree.insert(25)
tree.insert(35)
tree.insert(50)

console.log('Altura:', tree.getAlturaArvore())
console.log('Min:', tree.min())
console.log('Max:', tree.max())
