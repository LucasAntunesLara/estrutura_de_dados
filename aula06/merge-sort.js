// Merge Sort
const mergeSort = array => {
  if (array.length <= 1) return array

  const meio = Math.floor(array.length / 2)
  const esquerda = mergeSort(array.slice(0, meio))
  const direita = mergeSort(array.slice(meio))

  return merge(esquerda, direita)
}

const merge = (esquerda, direita) => {
  let resultado = []
  let i = 0,
    j = 0

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i])
      i++
    } else {
      resultado.push(direita[j])
      j++
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j))
}

const ordenado = mergeSort([5, 3, 4, 1, 2])

console.log(ordenado)
