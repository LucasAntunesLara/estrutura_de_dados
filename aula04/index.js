class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class List {
    constructor(){
        this.inicio = null
    }

    inserirNoInicio(value){ // O(1)
        const novo = new Node(value)
        novo.next = this.inicio
        this.inicio = novo
    }

    inserirNoFim(value){//O(n)
        const novo = new Node(value)
    
        if (this.inicio === null) {
            this.inicio = novo
        } else {
            let n = this.inicio
            while(n.next !== null) {
                n = n.next
            }
            n.next = novo
        }
    }

    removerNoInicio(){//O(1)
        if (this.inicio === null) return;
    
        let removido = this.inicio.value
        this.inicio = this.inicio.next
        return removido
    }

    removerNoFim(){//O(n)
        if (this.inicio === null) return null;
    
        if (this.inicio.next === null) {
            let removido = this.inicio.value
            this.inicio = null
            return removido
        }
    
        let n = this.inicio
        let anterior
        while(n.next !== null) {
            anterior = n
            n = n.next
        }
        anterior.next = null
        return n.value
    }

    posicao(value){//O(n)
        let n = this.inicio
        let k = 0
    
        while (n !== null){
            if (n.value === value) {
                return k
            }
            n = n.next
            k++
        }
    
        return -1
    }

    mostrarInicio() {
        if (this.inicio === null) return null

        return this.inicio.value
    }

    mostrar(){
        let n = this.inicio
        while(n !== null){
            console.log(n.value)
            n = n.next
        }
        console.log('\n')
    }

}

class Pilha {
    constructor(tamanhoMaximo){
        this.lista = new List()
        this.tamanho = 0
        this.maximo = tamanhoMaximo
    }
    push(value) {
        this.lista.inserirNoInicio(value)
        this.tamanho++
    }
    pop() {
        this.tamanho--
        return this.lista.removerNoInicio()
    }
    top() { return this.lista.mostrarInicio() }
    isEmpty(){ return this.tamanho === 0 }
    isFull(){ return this.tamanho === this.maximo }
    size(){ return this.tamanho }
}

const p = new Pilha(10)

p.push(3)
p.push(7)
p.push(8)

const x = p.pop()

console.log('X: ', x)

console.log(p.top())

//Crie funções que:
//1. Insira números em ordem crescente
//2. Remova números duplicados
//3. Concatenação de Listas encadeadas
//4. Inverter os nós da lista
//5. Inverter o N-ésimo termo da lista
//6. Retorne o maior elemento da lista
//7. Retorne o menor elemento da lista