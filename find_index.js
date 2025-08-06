const vetor2 = [
    { id: 1, nome: 'Produto 1', quantidade: 2 },
    { id: 2, nome: 'Produto 2', quantidade: 0 },
    { id: 3, nome: 'Produto 3', quantidade: 8 },
    { id: 4, nome: 'Produto 4', quantidade: 0 },
    { id: 5, nome: 'Produto 5', quantidade: 0 },
    { id: 6, nome: 'Produto 6', quantidade: 15 },
]

//Esquerda -> Direita
const posicao = vetor2.findIndex(p => p.id === 1)
//Direita -> Esquerda
const posicao2 = vetor2.findLastIndex(p => p.id === 1)

console.log(posicao)