//Quick Sort
function quickSort(array) {
  if (array.length <= 1) return array

  const pivo = array[array.length - 1]

  const menores = []
  const iguais = []
  const maiores = []

  for (let elemento of array) {
    if (elemento < pivo) menores.push(elemento)
    else if (elemento > pivo) maiores.push(elemento)
    else iguais.push(elemento)
  }

  return [...quickSort(menores), ...iguais, ...quickSort(maiores)]
}

const numeros = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4]

const ordenado = quickSort([5, 3, 4, 1, 2])

console.log(ordenado)
