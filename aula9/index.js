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
    const novo = new Node(value)
    novo.next = this.inicio
    this.inicio = novo
  }

  inserirNoFim(value) {
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

  includes(item) {
    let actualNode = this.inicio
    const searchValue = Number(item)

    while (actualNode !== null) {
      if (Number(actualNode.value) === searchValue) return true
      actualNode = actualNode.next
    }

    return false
  }

  updateListRender() {
    const itensList = document.querySelector('#itens-list')

    itensList.innerHTML = ''

    let actualNode = this.inicio
    let index = 0

    while (actualNode !== null) {
      const newItem = document.createElement('span')
      newItem.innerHTML = actualNode.value
      newItem.id = `item-${index}-${actualNode.value}`

      itensList.appendChild(newItem)

      actualNode = actualNode.next
      index++
    }
  }

  isEmpty() {
    return this.inicio === null
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

const list = new List()

// list.inserirNoInicio(10)
// list.inserirNoInicio(105)
// list.inserirNoInicio(104)
// list.inserirNoInicio(103)
// list.inserirNoInicio(102)
// list.inserirNoInicio(100)
// list.inserirNoInicio(108)
// list.inserirNoInicio(8)
// list.inserirNoInicio(20)
// list.inserirNoInicio(30)
// list.inserirNoInicio(40)
// list.inserirNoInicio(50)

const INSERTION_START = 'START'
const INSERTION_END = 'END'

// const showToast = message => {
//   const toast = document.createElement('div')
//   toast.className =
//     'fixed bottom-5 right-1/2 translate-x-1/2 bg-neutral-800 text-white py-2 px-4 rounded shadow-lg z-50 opacity-90 font-bold'
//   toast.innerHTML = message

//   document.body.appendChild(toast)

//   setTimeout(() => {
//     toast.remove()
//   }, 3000)
// }

const insertItem = (insertionType = INSERTION_START) => {
  const number = document.querySelector('#number')
  const item = number.value

  if (!item || isNaN(item)) {
    alert('Por favor, insira um número válido.')
    return
  }

  if (list.isEmpty()) {
    document.querySelector('#actionDeleteToggle').disabled = false
    document.querySelector('#search-item').disabled = false
  }

  if (insertionType === INSERTION_START) list.inserirNoInicio(item)
  else list.inserirNoFim(item)

  // showToast(`Item ${item} adicionado no ${insertionType.toLowerCase()}.`)
  number.value = ''
  list.updateListRender()
}

const removeItem = (insertionType = INSERTION_START) => {
  if (list.isEmpty()) return

  const removedItem =
    insertionType === INSERTION_START
      ? list.removerNoInicio()
      : list.removerNoFim()

  // if (removedItem !== null) {
  //   showToast(`Item ${removedItem} removido do ${insertionType.toLowerCase()}.`)
  // }

  list.updateListRender()

  if (list.isEmpty()) {
    document.querySelector('#actionDeleteToggle').disabled = true
    document.querySelector('#search-item').disabled = true
  }
}
const searchItem = () => {
  const input = document.querySelector('#search-item')

  input.addEventListener('input', () => {
    const searchValue = input.value
    const allItems = document.querySelectorAll('#itens-list span')

    allItems.forEach(item => item.classList.remove('bg-sky-500'))

    if (!searchValue) return

    allItems.forEach(item => {
      // O id é no formato "item-index-value", então pegamos o valor após o último "-"
      const itemValue = item.id.split('-').pop()
      if (itemValue === searchValue) item.classList.add('bg-sky-500')
    })
  })
}

window.onload = () => {
  list.updateListRender()

  if (list.isEmpty()) {
    document.querySelector('#actionDeleteToggle').disabled = true
    document.querySelector('#search-item').disabled = true
  }
}
