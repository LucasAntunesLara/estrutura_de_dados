const disciplinas = [
  {disciplina: 'Algoritmos e Programação', preRequisito: null},
  {disciplina: 'Princípios de Programação Web', preRequisito: null},
  {disciplina: 'Introdução à Computação', preRequisito: null},
  {disciplina: 'Matemática Discreta', preRequisito: null},

  {disciplina: 'Filosofia e Ética', preRequisito: null},
  {disciplina: 'Estrutura de Dados', preRequisito: 'Algoritmos e Programação'},
  {
    disciplina: 'Desenvolvimento de Interfaces Web',
    preRequisito: 'Princípios de Programação Web',
  },
  {disciplina: 'Banco de Dados', preRequisito: null},
  {disciplina: 'Organização e Arquitetura de Computadores', preRequisito: null},

  {disciplina: 'Gestão Empreendedora', preRequisito: null},
  {
    disciplina: 'Programação Orientada a Objetos',
    preRequisito: 'Algoritmos e Programação',
  },
  {
    disciplina: 'Desenvolvimento de Serviços Web',
    preRequisito: 'Algoritmos e Programação',
  },
  {disciplina: 'Processo de Software', preRequisito: null},
  {
    disciplina: 'Sistemas Operacionais',
    preRequisito: 'Organização e Arquitetura de Computadores',
  },

  {
    disciplina: 'Projeto Extensionista I',
    preRequisito: 'Programação Orientada a Objetos',
  },
  {
    disciplina: 'Análise e Projeto de Sistemas',
    preRequisito: 'Programação Orientada a Objetos',
  },
  {
    disciplina: 'Desenvolvimento de Aplicações Corporativas',
    preRequisito: 'Desenvolvimento de Serviços Web',
  },
  {
    disciplina: 'Interação Humano-Computador',
    preRequisito: 'Princípios de Programação Web',
  },
  {
    disciplina: 'Redes de Computadores I',
    preRequisito: 'Sistemas Operacionais',
  },
  {disciplina: 'Tecnologia e Sociedade', preRequisito: null},

  {
    disciplina: 'Projeto Extensionista II',
    preRequisito: 'Projeto Extensionista I',
  },
  {disciplina: 'Estatística Aplicada', preRequisito: null},
  {
    disciplina: 'Programação para Aplicativos Móveis',
    preRequisito: 'Princípios de Programação Web',
  },
  {
    disciplina: 'Qualidade e Teste de Software',
    preRequisito: 'Processo de Software',
  },
  {
    disciplina: 'Redes de Computadores II',
    preRequisito: 'Redes de Computadores I',
  },
  {disciplina: 'Democracia e Direitos Humanos', preRequisito: null},
  {disciplina: 'Optativo I', preRequisito: null},

  {
    disciplina: 'Projeto Extensionista III',
    preRequisito: 'Projeto Extensionista II',
  },
  {
    disciplina: 'Padrões de Projeto de Software',
    preRequisito: 'Programação Orientada a Objetos',
  },
  {
    disciplina: 'Modelagem de Processos de Negócio',
    preRequisito: 'Análise e Projeto de Sistemas',
  },
  {
    disciplina: 'Gerência de Projetos de Software',
    preRequisito: 'Processo de Software',
  },
  {disciplina: 'Segurança da Informação', preRequisito: 'Processo de Software'},
  {
    disciplina: 'Sustentabilidade e Responsabilidade Socioambiental',
    preRequisito: null,
  },
  {disciplina: 'Optativo II', preRequisito: null},
]

class Grafo {
  constructor() {
    this.listaAdjacencia = {}
    this.grauEntrada = {}
  }

  adicionarVertice(v) {
    if (!this.listaAdjacencia[v]) this.listaAdjacencia[v] = []

    if (!this.grauEntrada[v] && this.grauEntrada[v] !== 0)
      this.grauEntrada[v] = 0
  }

  adicionarAresta(origem, destino) {
    this.listaAdjacencia[origem].push(destino)

    this.grauEntrada[destino]++
  }

  ordenacaoTopologica() {
    const fila = []
    const ordem = []

    for (const disciplina in this.grauEntrada)
      if (this.grauEntrada[disciplina] === 0) fila.push(disciplina)

    while (fila.length > 0) {
      const atual = fila.shift()

      ordem.push(atual)

      for (const vizinho of this.listaAdjacencia[atual]) {
        this.grauEntrada[vizinho]--

        if (this.grauEntrada[vizinho] === 0) fila.push(vizinho)
      }
    }

    if (ordem.length !== Object.keys(this.listaAdjacencia).length)
      return {ciclo: true, ordem: null}

    return {ciclo: false, ordem}
  }
}

const grafo = new Grafo()

disciplinas.forEach(d => grafo.adicionarVertice(d.disciplina))

disciplinas.forEach(d => {
  if (d.preRequisito) grafo.adicionarAresta(d.preRequisito, d.disciplina)
})

const resultado = grafo.ordenacaoTopologica()

if (resultado.ciclo) console.log('Ciclo detectado! Há dependências circulares.')
else {
  console.log('Sequência válida de conclusão:\n')

  resultado.ordem.forEach((d, i) => console.log(`${i + 1}. ${d}`))
}
