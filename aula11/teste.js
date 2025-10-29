class Grafo {
  constructor(isDirecionado = false) {
    this.vertices = {}
    this.isDirecionado = isDirecionado
  }

  inserirVertice(vertice) {
    if (!this.vertices[vertice]) this.vertices[vertice] = []
  }

  inserirAresta(vertice1, vertice2, peso) {
    if (!this.vertices[vertice1]) this.inserirVertice(vertice1)
    if (!this.vertices[vertice2]) this.inserirVertice(vertice2)

    const w = typeof peso === 'number' ? peso : 1

    this.vertices[vertice1].push({
      vertice: vertice2,
      peso: w,
    })

    if (!this.isDirecionado)
      this.vertices[vertice2].push({
        vertice: vertice1,
        peso: w,
      })
  }

  menorCaminho(vertice1, vertice2) {
    vertice1 = String(vertice1).trim()
    vertice2 = String(vertice2).trim()

    if (!this.vertices[vertice1] || !this.vertices[vertice2]) {
      console.log('Um ou ambos os vértices não existem no grafo')
      return null
    }

    if (vertice1 === vertice2) {
      console.log(`${vertice1}, custo: 0`)
      return {caminho: [vertice1], custo: 0}
    }

    const INFINITO = 999999999
    const distancias = {}
    const anteriores = {}
    const visitados = {}
    let verticesRestantes = 0

    // Inicialização
    for (let vertice in this.vertices) {
      distancias[vertice] = vertice === vertice1 ? 0 : INFINITO
      anteriores[vertice] = null
      visitados[vertice] = false
      verticesRestantes++
    }

    while (verticesRestantes > 0) {
      // Encontra vértice não visitado com menor distância
      let menorDistancia = INFINITO
      let verticeAtual = null

      for (let vertice in this.vertices) {
        if (!visitados[vertice] && distancias[vertice] < menorDistancia) {
          menorDistancia = distancias[vertice]
          verticeAtual = vertice
        }
      }

      if (!verticeAtual || menorDistancia === INFINITO) break
      if (verticeAtual === vertice2) break

      visitados[verticeAtual] = true
      verticesRestantes--

      // Atualiza distâncias dos vizinhos
      for (let aresta of this.vertices[verticeAtual]) {
        const vizinho = aresta.vertice
        if (visitados[vizinho]) continue

        const distanciaTotal = distancias[verticeAtual] + aresta.peso

        if (distanciaTotal < distancias[vizinho]) {
          distancias[vizinho] = distanciaTotal
          anteriores[vizinho] = verticeAtual
        }
      }
    }

    if (distancias[vertice2] === INFINITO) {
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

    console.log(caminho.join(' -> ') + ', custo: ' + custoTotal)
    return {
      caminho,
      custo: custoTotal,
    }
  }
}

// Teste com o mesmo exemplo
const x = new Grafo()
x.inserirVertice('C')
x.inserirAresta('A', 'B', 6)
x.inserirAresta('A', 'D', 1)
x.inserirAresta('B', 'D', 2)
x.inserirAresta('B', 'C', 5)
x.inserirAresta('D', 'E', 1)
x.inserirAresta('E', 'C', 5)

x.menorCaminho('A', 'C')
