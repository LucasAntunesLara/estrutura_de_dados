// 4. Inverter os nós da lista

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List {
    constructor() {
        this.inicio = null
    }

    inserirNoInicio(value) { // O(1)
        const novo = new Node(value)
        novo.next = this.inicio
        this.inicio = novo
    }

    inserirNoFim(value) {//O(n)
        const novo = new Node(value)

        if (this.inicio === null) {
            this.inicio = novo
        } else {
            let n = this.inicio
            while (n.next !== null) {
                n = n.next
            }
            n.next = novo
        }
    }

    inserirEmOrdemCrescente(value) {
        const node = new Node(value);

        if (this.inicio === null || value < this.inicio.value) {
            node.next = this.inicio;
            this.inicio = node;
            return;
        }

        let atual = this.inicio;
        while (atual.next !== null && atual.next.value < value) atual = atual.next

        node.next = atual.next;
        atual.next = node;
    }


    removerNoInicio() {//O(1)
        if (this.inicio === null) return;

        let removido = this.inicio.value
        this.inicio = this.inicio.next
        return removido
    }

    removerNoFim() {//O(n)
        if (this.inicio === null) return null;

        if (this.inicio.next === null) {
            let removido = this.inicio.value
            this.inicio = null
            return removido
        }

        let n = this.inicio
        let anterior
        while (n.next !== null) {
            anterior = n
            n = n.next
        }
        anterior.next = null
        return n.value
    }

    removerDuplicados() {
        if (this.inicio === null) return null

        let atual = this.inicio
        let valores = new Set()
        valores.add(atual.value)

        while (atual.next !== null) {
            if (valores.has(atual.next.value))
                atual.next = atual.next.next
            else {
                valores.add(atual.next.value)
                atual = atual.next
            }
        }
    }

    posicao(value) {//O(n)
        let n = this.inicio
        let k = 0

        while (n !== null) {
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

    mostrar() {
        let n = this.inicio
        while (n !== null) {
            console.log(n.value)
            n = n.next
        }
        console.log('\n')
    }

    inverterNodes() {
        let atual = this.inicio
        let lista = []

        while (atual !== null) {
            lista.push(atual)
            
            atual = atual.next
        }

        //inverter lista
    }

    concatenar(novaLista) {
        let listaConcatenada = []

        let lista = this.inicio
        let lista2 = novaLista.inicio

        while (lista !== null) {
            listaConcatenada.push(lista.value)
            lista = lista.next
        }

        while (lista2 !== null) {
            listaConcatenada.push(lista2.value)
            lista2 = lista2.next
        }

        return listaConcatenada
    }

}

class Pilha {
    constructor(tamanhoMaximo) {
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
    isEmpty() { return this.tamanho === 0 }
    isFull() { return this.tamanho === this.maximo }
    size() { return this.tamanho }
}

const lista1 = new List()

lista1.inserirEmOrdemCrescente(5)
lista1.inserirEmOrdemCrescente(8)
lista1.inserirEmOrdemCrescente(4)
lista1.inserirEmOrdemCrescente(2)

const lista2 = new List()

lista2.inserirEmOrdemCrescente(13)
lista2.inserirEmOrdemCrescente(14)
lista2.inserirEmOrdemCrescente(15)
lista2.inserirEmOrdemCrescente(16)

console.log(lista1.concatenar(lista2))