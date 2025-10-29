class Grafo {
  constructor(isDirecionado = false) {
    this.vertices = {}
    this.isDirecionado = isDirecionado
  }

  adicionarVertice(vertice) {
    if (!this.vertices[vertice]) this.vertices[vertice] = []
  }

  adicionarAresta(vertice1, vertice2, peso) {
    if (!this.vertices[vertice1]) this.adicionarVertice(vertice1)
    if (!this.vertices[vertice2]) this.adicionarVertice(vertice2)

    this.vertices[vertice1].push({
      vertice: vertice2,
      peso: peso,
    })

    if (!this.isDirecionado) {
      this.vertices[vertice2].push({
        vertice: vertice1,
        peso: peso,
      })
    }
  }

  mostrar() {
    for (const vertice in this.vertices) {
      console.log(vertice)

      this.vertices[vertice].forEach(aresta =>
        console.log(`${aresta.vertice} - ${aresta.peso}`)
      )
    }
  }

  menorCaminho(vertice1, vertice2) {
    const distancias = {}
    const anteriores = {}
    const naoVisitados = new Set()

    vertice2 = String(vertice2).trim()

    if (!this.vertices[vertice1] || !this.vertices[vertice2]) {
      console.log('Algum dos vértices não existe no grafo')

      return null
    }

    if (vertice1 === vertice2) {
      console.log(`${vertice1}, custo: 0`)

      return {caminho: [vertice1], custo: 0}
    }

    for (let vertice in this.vertices) {
      distancias[vertice] = vertice === vertice1 ? 0 : Infinity

      anteriores[vertice] = null

      naoVisitados.add(vertice)
    }

    while (naoVisitados.size > 0) {
      let menorDistancia = Infinity
      let verticeAtual = null

      for (let vertice of naoVisitados) {
        if (distancias[vertice] < menorDistancia) {
          menorDistancia = distancias[vertice]
          verticeAtual = vertice
        }
      }

      if (verticeAtual === null || menorDistancia === Infinity) break

      if (verticeAtual === vertice2) break

      naoVisitados.delete(verticeAtual)

      for (let aresta of this.vertices[verticeAtual]) {
        const vizinho = aresta.vertice

        if (!naoVisitados.has(vizinho)) continue

        const distanciaTotal =
          distancias[verticeAtual] +
          (typeof aresta.peso === 'number' ? aresta.peso : 1)

        if (distanciaTotal < distancias[vizinho]) {
          distancias[vizinho] = distanciaTotal

          anteriores[vizinho] = verticeAtual
        }
      }
    }

    if (distancias[vertice2] === Infinity) {
      console.log('Não há caminho entre os vértices')

      return null
    }

    const caminho = []

    let atual = vertice2

    const custoTotal = distancias[vertice2]

    while (atual !== null) {
      caminho.unshift(atual)
      atual = anteriores[atual]
    }

    console.log(` ${caminho.join(' -> ')}, custo: ${custoTotal}`)

    return {
      caminho,
      custo: custoTotal,
    }
  }
}

const g = new Grafo()

g.adicionarAresta('A', 'B', 6)
g.adicionarAresta('A', 'D', 1)
g.adicionarAresta('B', 'D', 2)
g.adicionarAresta('D', 'E', 1)
g.adicionarAresta('B', 'C', 5)
g.adicionarAresta('E', 'C', 5)

g.mostrar()

g.menorCaminho('A', 'C')
