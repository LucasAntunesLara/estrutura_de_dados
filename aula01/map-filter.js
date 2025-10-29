//Primeiro filtrar e DEPOIS aplicar o map

const vetor2 = [
    { nome: 'Produto 1', quantidade: 2 },
    { nome: 'Produto 2', quantidade: 0 },
    { nome: 'Produto 3', quantidade: 8 },
    { nome: 'Produto 4', quantidade: 0 },
    { nome: 'Produto 5', quantidade: 0 },
    { nome: 'Produto 6', quantidade: 15 },
]

const nomesEmEstoque = 
    vetor2.
        filter((produto) => produto.quantidade > 0).
        map(produto => produto.nome)

console.log(nomesEmEstoque)