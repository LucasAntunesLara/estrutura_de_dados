//insertion-sort.js

const insertionSort = array => {
  for (let contador = 0; contador < array.length - 1; contador++) {
    let auxiliar = array[contador + 1]

    let posicao = contador

    while (array[posicao] > auxiliar) {
      array[posicao + 1] = array[posicao]
      posicao--
    }

    array[posicao + 1] = auxiliar
  }
  return array
}
const ordenado = insertionSort([5, 3, 4, 1, 2])

console.log(ordenado)
