//ações no início fila
//ações no fim pilha
//usar lista

//array que comça com 0
//métodos para cada tipo de inclusão e exclusão
//dependendo do tipo escolhido, altera o array e
//exibe a lista atualizada na tela

// class Fila {
//   constructor(tamanho) {
//     this.array = new Array(tamanho)
//     this.topo = -1
//     this.tamanho = tamanho
//   }

//   isEmpty() {
//     return this.topo === -1
//   }
//   isFull() {
//     return this.topo === this.tamanho - 1
//   }
//   size() {
//     return this.topo + 1
//   }

//   push(elemento) {
//     if (this.isFull()) {
//       console.log('Erro: pilha cheia.')
//       return
//     }
//     this.topo++
//     this.array[this.topo] = elemento
//   }

//   pop() {
//     if (this.isEmpty()) {
//       console.log('Erro: pilha vazia.')
//       return null
//     }

//     const elemento = this.top()
//     this.topo--
//     return elemento
//   }

//   top() {
//     return this.array[this.topo]
//   }

//   imprimir() {
//     for (let i = 0; i <= this.topo; i++) {
//       console.log(this.array[i])
//     }
//   }
// }
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor() {
    this.inicio = null
  }

  inserirNoInicio(value) {
    // O(1)
    const novo = new Node(value)
    novo.next = this.inicio
    this.inicio = novo
  }

  inserirNoFim(value) {
    //O(n)
    const novo = new Node(value)

    if (this.inicio === null) {
      this.inicio = novo
    } else {
      let n = this.inicio
      while (n.next !== null) {
        n = n.next
      }
      n.next = novo
    }
  }

  removerNoInicio() {
    //O(1)
    if (this.inicio === null) return

    let removido = this.inicio.value
    this.inicio = this.inicio.next
    return removido
  }

  removerNoFim() {
    //O(n)
    if (this.inicio === null) return null

    if (this.inicio.next === null) {
      let removido = this.inicio.value
      this.inicio = null
      return removido
    }

    let n = this.inicio
    let anterior
    while (n.next !== null) {
      anterior = n
      n = n.next
    }
    anterior.next = null
    return n.value
  }

  posicao(value) {
    //O(n)
    let n = this.inicio
    let k = 0

    while (n !== null) {
      if (n.value === value) {
        return k
      }
      n = n.next
      k++
    }

    return -1
  }

  mostrarInicio() {
    if (this.inicio === null) return null

    return this.inicio.value
  }

  //rever esse método
  //garantir que atualize a rendenização da lista de acordo com o actionType
  updateListRender(actionType) {
    const itensList = document.querySelector('#itens-list')

    let n = this.inicio

    while (n !== null) {
      const newItem = document.createElement('span')
      newItem.innerHTML = n.value
      itensList.appendChild(newItem)

      n = n.next
    }
    console.log('\n')
  }
}

class Pilha {
  constructor(tamanhoMaximo) {
    this.lista = new List()
    this.tamanho = 0
    this.maximo = tamanhoMaximo
  }

  push(value) {
    this.lista.inserirNoInicio(value)
    this.tamanho++
  }

  pop() {
    this.tamanho--
    return this.lista.removerNoInicio()
  }

  top() {
    return this.lista.mostrarInicio()
  }

  isEmpty() {
    return this.tamanho === 0
  }

  isFull() {
    return this.tamanho === this.maximo
  }

  size() {
    return this.tamanho
  }
}

const inserirNoFim = () => {
  const number = document.querySelector('#number')
  const item = number.value

  const list = new List()
  list.inserirNoFim(item)
  list.mostrar()
}

const insertItem = (insertionType = 'INÍCIO') => {
  const number = document.querySelector('#number')
  const item = number.value

  const list = new List()

  insertionType === 'INÍCIO'
    ? list.inserirNoInicio(item)
    : list.inserirNoFim(item)

  console.log(insertionType)
  list.updateListRender()
}

const removeItem = (insertionType = 'INÍCIO') => {
  const number = document.querySelector('#number')
  const item = number.value

  const list = new List()

  insertionType === 'INÍCIO'
    ? list.removerNoInicio(item)
    : list.removerNoFim(item)

  console.log(insertionType)
  list.updateListRender()
}
