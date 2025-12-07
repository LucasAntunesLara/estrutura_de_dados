//34 disciplinas no total

const disciplinas = [
  // 1º semestre
  {disciplina: 'Algoritmos e Programação', preRequisito: null},
  {disciplina: 'Princípios de Programação Web', preRequisito: null},
  {disciplina: 'Introdução à Computação', preRequisito: null},
  {disciplina: 'Matemática Discreta', preRequisito: null},

  // 2º semestre
  {disciplina: 'Filosofia e Ética', preRequisito: null},
  {disciplina: 'Estrutura de Dados', preRequisito: 'Algoritmos e Programação'},
  {
    disciplina: 'Desenvolvimento de Interfaces Web',
    preRequisito: 'Princípios de Programação Web',
  },
  {disciplina: 'Banco de Dados', preRequisito: null},
  {
    disciplina: 'Organização e Arquitetura de Computadores',
    preRequisito: null,
  },

  // 3º semestre
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

  // 4º semestre
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
  {
    disciplina: 'Tecnologia e Sociedade',
    preRequisito: null,
  },

  //5º semestre
  {
    disciplina: 'Projeto Extensionista II',
    preRequisito: 'Projeto Extensionista I',
  },
  {
    disciplina: 'Estatística Aplicada',
    preRequisito: null,
  },
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
  {
    disciplina: 'Democracia e Direitos Humanos',
    preRequisito: null,
  },
  {
    disciplina: 'Optativo I',
    preRequisito: null,
  },

  // 6º semestre
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
  {
    disciplina: 'Segurança da Informação',
    preRequisito: 'Processo de Software',
  },
  {
    disciplina: 'Sustentabilidade e Responsabilidade Socioambiental',
    preRequisito: null,
  },
  {
    disciplina: 'Optativo II',
    preRequisito: null,
  },
]

console.log(disciplinas.length)
