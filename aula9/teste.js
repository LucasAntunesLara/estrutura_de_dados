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
