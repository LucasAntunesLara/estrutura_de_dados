const vetor = [3, 4, 2, 6, 9, 7]


//MAP
// Todos os elementos estão na resposta final, mas seu valor pode (ou não) estar modificado
//Seu length será o mesmo do array original
//Cria um novo array baseado no original e com valroes modificados
//Usada caso eu quero retornar um array baseado no orginal com, ao menos algum, elemento com valor modificado
//Mesma sintaxe (ou seja, mesmos parâmetros do filter)
const novo = vetor.map((valor) => {
    return (valor % 2 === 1) ? valor * 2 : valor
    // if (valor % 2 !== 0) return valor * 2
    // return valor
})

const vetor2 = [
    { nome: 'Produto 1', quantidade: 2 },
    { nome: 'Produto 2', quantidade: 0 },
    { nome: 'Produto 3', quantidade: 8 },
    { nome: 'Produto 4', quantidade: 0 },
    { nome: 'Produto 5', quantidade: 0 },
    { nome: 'Produto 6', quantidade: 15 },
]

const nomes = vetor2.map(produto => produto.nome)
const quantidades = vetor2.map(produto => produto.quantidade)
console.log(nomes)
console.log(quantidades)