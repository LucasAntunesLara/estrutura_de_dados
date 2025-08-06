//FIND
//Usada principlamente em arrays com objetos
//Retorna um determinado elemento que atende a uma condição estabelecida
//O fato de ele retornar o elemento que atende a um critério o diferencia do includes
//Muito usado para recuperar informações extras de um elemento
//Filter retorna o vetor, find retorna o OBJETO
//Filter pra acessar elementos HTML com uma determinada classe e find para com uma determinada classe

const vetor2 = [
    { id: 1, nome: 'Produto 1', quantidade: 2 },
    { id: 2, nome: 'Produto 2', quantidade: 0 },
    { id: 3, nome: 'Produto 3', quantidade: 8 },
    { id: 4, nome: 'Produto 4', quantidade: 0 },
    { id: 5, nome: 'Produto 5', quantidade: 0 },
    { id: 6, nome: 'Produto 6', quantidade: 15 },
]

//Esquerda -> Direita
const produto = vetor2.find(p => p.id === 1)
//Direita -> Esquerda
const posicao2 = vetor2.findLast(p => p.id === 1)

if (produto) console.log(produto.nome)
else console.log('Produto não encontrado =(')