const vetor = [3, 4, 2, 6, 9, 7]

//EVERY

// Verifica se TODOS os elementos do array aplicam-se a uma determinada condição estabelecida no parâmetro
const todosSaoPares = vetor.every(v =>  v % 2 === 0 )
console.log(todosSaoPares)