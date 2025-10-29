const vetor = [3, 4, 2, 6, 9, 7]

//FILTER
//##Retorna um valor booleano

//- Elemento => começa em 1 (valor + posição)
//- Valor (que está em uma posição)
//- Posição => começa em 0
// const novo = vetor.filter((valor, posicao, copia) => {
// const novo = vetor.filter(valor => (valor % 2 === 0))

//console.log(vetor)
//console.log(novo)

const vetor2 = [
    { nome: 'Produto 1', quantidade: 2 },
    { nome: 'Produto 2', quantidade: 0 },
    { nome: 'Produto 3', quantidade: 8 },
    { nome: 'Produto 4', quantidade: 0 },
    { nome: 'Produto 5', quantidade: 0 },
    { nome: 'Produto 6', quantidade: 15 },
]

const emEstoque = vetor2.filter((produto) => produto.quantidade > 0)
console.log(emEstoque)