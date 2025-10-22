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

    this.vertices[vertice1].push({
      vertice: vertice1,
      peso: peso,
    })

    if (!this.isDirecionado)
      this.vertices[vertice2].push({
        vertice: vertice2,
        peso: peso,
      })
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
    // console.log('A,D,E,C - Custo 7')
  }
}

const x = new Grafo()

x.inserirVertice('C')

x.inserirAresta('A', 'B', 6)
x.inserirAresta('A', 'D', 1)
x.inserirAresta('B', 'D', 2)
x.inserirAresta('B', 'C', 5)
x.inserirAresta('D', 'E', 1)
x.inserirAresta('E', 'C', 1)
// x.menorCaminho('A','C')
x.mostrar()
