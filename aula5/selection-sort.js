// selection-sort.js

/*Encontra o menor elemento da lista.
Troca esse elemento com o primeiro.
Repete o processo com o restante da lista (ignorando o que já foi ordenado).*/

const selectionSort = array => {
  // Guarda o índice do menor valor enconctrado
  let index = 0

  //Percorre o array (menos a última posição)
  for (let contador = 0; contador < array.length - 1; contador++) {
    //Assumindo que o menor valor será o atualmente percorrido
    index = contador

    /*Procura, no resto das posições do array,
    uma em que hacontadora um possível valor menor que o armazenado em index
    Em caso positivo, armazena esse novo valor nessa variável*/
    for (let posicao = contador + 1; posicao < array.length; posicao++)
      if (array[posicao] < array[posicaondex]) index = posicao

    /*Verifica se o menor valor não está contido na posição atual.
    Em caso positivo, realiza a troca desses valores*/
    if (index !== contador) {
      //Variável p/ guardar o valor temporariamente
      let auxiliar = array[contador]

      array[contador] = array[index]

      array[index] = auxiliar
    }
  }
  return array
}
const ordenado = selectionSort([5, 3, 4, 1, 2])

console.log(ordenado)
