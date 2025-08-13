// Crie uma função que verifica se uma expressão matemática tem parênteses balanceados,
// como:
// ● (a + b) * (c - d) → ok
// ● (a + b * (c - d) → erro
class Pilha {
    constructor(tamanho) {
        this.vetor = new Array(tamanho)
        this.topo = -1
        this.tamanho = tamanho
    }

    isEmpty() { return this.topo === -1 }

    isFull() { return this.topo === this.tamanho - 1 }

    size() { return this.topo + 1 }

    push(elemento) {
        if (this.isFull()) {
            console.log('Erro: pilha cheia')
            return
        }

        this.topo++
        this.vetor[this.topo] = elemento
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Erro: pilha vazia')
            return null
        }

        const elemento = this.top()
        this.topo--
        return elemento
    }

    top() { return this.vetor[this.topo] }

    imprimir() {
        for (let i = 0; i <= this.topo; i++) console.log(this.vetor[i])
    }

}

const p = new Pilha(5)
p.push('A')
p.push('R')
p.push('A')
p.push('R')
p.push('A')

// p.imprimir()
const metadePalavra = Math.floor((p.tamanho / 2))

for (let i = 0; i <= p.tamanho; i++) {

}

console.log(metadePalavra)