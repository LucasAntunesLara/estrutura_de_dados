class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor() {
    this.start = null
  }

  insertOnStart(value) {
    const node = new Node(value)
    node.next = this.start
    this.start = node
  }

  insertOnEnd(value) {
    const node = new Node(value)

    if (this.start === null) {
      this.start = node
    } else {
      let n = this.start
      while (n.next !== null) {
        n = n.next
      }
      n.next = node
    }
  }

  removeOnStart() {
    if (this.start === null) return

    let removed = this.start.value
    this.start = this.start.next
    return removed
  }

  removeOnEnd() {
    if (this.start === null) return null

    if (this.start.next === null) {
      let removed = this.start.value
      this.start = null
      return removed
    }

    let n = this.start
    let anterior
    while (n.next !== null) {
      anterior = n
      n = n.next
    }
    anterior.next = null
    return n.value
  }

  position(value) {
    let n = this.start
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

  showStart() {
    if (this.start === null) return null

    return this.start.value
  }

  includes(item) {
    let actualNode = this.start
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

    let actualNode = this.start
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
    return this.start === null
  }
}

const list = new List()

const START = 'START'
const END = 'END'

const insertItem = (removalType = START) => {
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

  if (removalType === START) list.insertOnStart(item)
  else list.insertOnEnd(item)

  number.value = ''
  list.updateListRender()
}

const removeItem = (removalType = START) => {
  if (list.isEmpty()) return

  const removedItem =
    removalType === START ? list.removeOnStart() : list.removeOnEnd()

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
