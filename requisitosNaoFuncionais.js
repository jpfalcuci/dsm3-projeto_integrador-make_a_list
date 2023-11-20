const requisitosNaoFuncionais = [
  {
    id: 1,
    titulo: "RNF001 - Usabilidade",
    tipo: {
      usabilidade: true,
      desempenho: false,
      seguranca: false,
      compatibilidade: false,
      escalabilidade: false,
    },
    obrigatoriedade: {
      obrigatorio: true,
      desejavel: false,
    },
    durabilidade: {
      permanente: true,
      transitorio: false,
    },
    descricao:
      "A interface da aplicação deve ser intuitiva e de fácil utilização para garantir uma experiência positiva do usuário. As ações devem ser claras e autoexplicativas. Este requisito de usabilidade é obrigatório e permanente, pois é fundamental para a satisfação dos usuários a longo prazo.",
  },
  {
    id: 2,
    titulo: "RNF002 - Desempenho",
    tipo: {
      usabilidade: false,
      desempenho: true,
      seguranca: false,
      compatibilidade: false,
      escalabilidade: false,
    },
    obrigatoriedade: {
      obrigatorio: true,
      desejavel: false,
    },
    durabilidade: {
      permanente: true,
      transitorio: false,
    },
    descricao:
      "A aplicação deve responder de forma rápida e eficiente, mesmo com um grande número de itens ou listas cadastradas. Este requisito de desempenho é obrigatório e permanente, garantindo que a aplicação seja responsiva em todas as situações.",
  },
  {
    id: 3,
    titulo: "RNF003 - Segurança",
    tipo: {
      usabilidade: false,
      desempenho: false,
      seguranca: true,
      compatibilidade: false,
      escalabilidade: false,
    },
    obrigatoriedade: {
      obrigatorio: true,
      desejavel: false,
    },
    durabilidade: {
      permanente: true,
      transitorio: false,
    },
    descricao:
      "As senhas dos usuários devem ser armazenadas de maneira segura e protegidas por hash. As informações pessoais dos usuários não devem ser acessíveis por outros usuários. Este requisito de segurança é obrigatório e permanente, garantindo a proteção das informações dos usuários.",
  },
  {
    id: 4,
    titulo: "RNF004 - Compatibilidade com Dispositivos",
    tipo: {
      usabilidade: false,
      desempenho: false,
      seguranca: false,
      compatibilidade: true,
      escalabilidade: false,
    },
    obrigatoriedade: {
      obrigatorio: true,
      desejavel: false,
    },
    durabilidade: {
      permanente: true,
      transitorio: false,
    },
    descricao:
      "A aplicação deve ser responsiva e funcionar adequadamente em dispositivos móveis e desktops. Este requisito de compatibilidade com dispositivos é obrigatório e permanente, garantindo que os usuários possam acessar a aplicação de diferentes dispositivos.",
  },
  {
    id: 5,
    titulo: "RNF005 - Escalabilidade",
    tipo: {
      usabilidade: false,
      desempenho: false,
      seguranca: false,
      compatibilidade: false,
      escalabilidade: true,
    },
    obrigatoriedade: {
      obrigatorio: true,
      desejavel: false,
    },
    durabilidade: {
      permanente: true,
      transitorio: false,
    },
    descricao:
      "O sistema deve ser projetado para lidar com um aumento gradual de usuários e dados. Este requisito de escalabilidade é obrigatório e permanente, assegurando que a aplicação possa crescer de forma sustentável com o aumento da demanda.",
  },
];
