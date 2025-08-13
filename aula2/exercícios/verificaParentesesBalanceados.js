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
        for (let i = 0; i < this.topo; i++) console.log(this.vetor[i])
    }
}

const p = new Pilha(10)
const expressão = '(a + b) * (c - d)'

let i

for (i= 0; i <= html.length; i++) {
    if (html[i] === '(') p.push('(')
    else if (html[i] === ')') {
        if (p.size() === 0) break;
        else p.pop()
    }

}
if (i < html.length || p.size() !== 0) console.log('erro')
else console.log('ok')
