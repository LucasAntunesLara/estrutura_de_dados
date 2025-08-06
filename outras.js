const vetor = [2, 3, 4, 25, 6, 7, 8]

// Se um elemento está em um vetor

console.log(vetor.includes(5) ? 'Número 5 está presente' : 'Número 5 NÃO está presente')

// Subconjunto de um vetor

// const novo = vetor.slice(3)
// const novo = vetor.slice(vetor.indexOf(25))
const novo = vetor.slice(vetor.indexOf(2) + 1, vetor.indexOf(2) + 3)
console.log(novo)