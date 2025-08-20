class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

let inicio = null

// O(1)
function inserirNoInicio(value) {
    const novo = new Node(value)
    novo.next = inicio
    inicio = novo
}

// O(n)
function inserirNoFim(value) {
    const novo = new Node(value)

    if (inicio === null) return inicio = novo

    let n = inicio
    while (n.next !== null) n = n.next

    n.next = novo

}

// O(1)
function removerNoInicio() {
    if (inicio === null) return

    let removido = inicio.value
    inicio = inicio.next

    return removido
}

// O(n)
function removerNoFim() {
    if (inicio === null) return null

    if (inicio.next === null) {
        let removido = inicio.value
        inicio = null
        return removido
    }

    let n = inicio
    let anterior
    while (n.next !== null) {
        anterior = n
        n = n.next
    }

    anterior.next = null
    return n.value

}

function mostrar() {
    let n = inicio
    while (n !== null) {
        console.log(n.value)
        n = n.next
    }

    console.log('\n')
}

inserirNoFim(3)
mostrar()
inserirNoFim(6)
mostrar()
inserirNoFim(8)
mostrar()
// const x = removerNoInicio()
// console.log(`O valor removido foi: ${x}`)
// mostrar()
removerNoFim()
mostrar()
// inserirNoFim(8)
// mostrar()

// inserirNoInicio(3)
// mostrar()
// inserirNoInicio(6)
// mostrar()
// inserirNoInicio(8)
// mostrar()