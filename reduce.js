//# REDUCE
//- Função coringa, faz tudo o que as outras funções fazem
//- Útil para gerenciamento de estados
//- Pega um vetor e transforma ele em qualquer coisa
const vetor = [2, 7, 4, 5, 6, 7, 8]

const vetor2 = [
    { quantidade: 2, preco: 3 },
    { quantidade: 1, preco: 13 },
    { quantidade: 4, preco: 63 },

]

//ELEMENTO NEUTRO (nesse caso o 0) após a vírgula, define o valor inicial
//É isso que vai definir qual função o reduce vai emular

//- O que é retornado é retornado para o próximo elemento
//- O último elemento é que será, de fato, minha resposta
// -O que é definido como anterior é retornado no atual
//- O retorno no atual será o anterior + atual
//- Na primeira vez que é executado o anterior é o 0 (número inicial) e o atual é o 2
// - O anterior repassa seu valor ao atual
const soma = vetor.reduce((anterior, atual) => {
    return atual + anterior
}, 0)

const total = vetor2.reduce((anterior, p) => {
    return p.preco * p.quantidade + anterior
}, 0)

console.log(soma)
console.log(total)