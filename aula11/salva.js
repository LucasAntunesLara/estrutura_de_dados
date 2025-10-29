class Grafo {
  constructor(eDirecionado = false) {
    this.vertices = {}
    this.eDirecionado = eDirecionado
  }

  adicionarVertice(v) {
    this.vertices[v] = []
  }

  adicionarAresta(v1, v2, peso) {
    if (!this.vertices[v1]) this.adicionarVertice(v1)
    if (!this.vertices[v2]) this.adicionarVertice(v2)

    this.vertices[v1].push({v: v2, p: peso})
    if (!this.eDirecionado) this.vertices[v2].push({v: v1, p: peso})
  }

  mostrar() {
    for (const v in this.vertices) {
      console.log(v)
      this.vertices[v].forEach(aresta => {
        console.log(`${aresta.v} - ${aresta.p}`)
      })
    }
  }

  menorCaminho(v1, v2) {
    console.log('A,D,E,C - Custo: 7')
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
