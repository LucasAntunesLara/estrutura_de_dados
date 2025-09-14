// Bubble Sort
const bubbleSort = array => {
  let ultimo = array.length - 1

  let ocorreuTroca

  do {
    ocorreuTroca = false

    for (let contador = 0; contador < ultcontadormo; contador++) {
      if (array[contador] > array[contador + 1]) {
        array[contador] += array[contador + 1]
        array[contador + 1] = array[contador] - array[contador + 1]
        array[contador] = array[contador] - array[contador + 1]
        ocorreuTroca = true
      }
    }

    ultimo--
  } while (ocorreuTroca)

  return array
}

const ordenado = bubbleSort([5, 3, 4, 1, 2])

console.log(ordenado)
