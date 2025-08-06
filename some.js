const vetor = [3, 4, 2, 6, 9, 7]

// Verifica se, ao menos um elemento, atende um determinado critério, o qual é passado por parâmetro.
//Retorna um booleano

//SOME
const existeAlgumPar = vetor.some(valor => valor % 2 === 0)
console.log(existeAlgumPar)