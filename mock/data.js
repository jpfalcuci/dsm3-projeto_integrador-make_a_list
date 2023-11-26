/* REQUISITOS FUNCIONAIS */
const requisitosFuncionais = [
  {
    id: 1,
    titulo: "RF001 - Cadastro de Usuário",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem se cadastrar na plataforma fornecendo informações como nome, e-mail esenha. Este requisito é evidente, pois é essencial para a funcionalidade básica do sistema e possui prioridade altíssima, já que sem ele os usuários não podem acessar a aplicação.",
  },
  {
    id: 2,
    titulo: "RF002 - Autenticação",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem fazer login usando suas credenciais cadastradas. O sistema deve validar as credenciais do usuário para autenticá-lo. Este requisito também é evidente e possui prioridade altíssima, pois é crucial para garantir a segurança e o acesso controlado à plataforma",
  },
  {
    id: 3,
    titulo: "RF003 - Criar Lista de Compras",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem criar novas listas de compras, dando a elas um nome descritivo. Este requisito é evidente e altamente prioritário, pois é a funcionalidade central da aplicação.",
  },
  {
    id: 4,
    titulo: "RF004 - Adicionar Items à Lista de Compras",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem adicionar itens à lista de compras, incluindo nome, quantidade e categoria. Este requisito é evidente e altamente prioritário, pois permite que os usuários construam suas listas de compras.",
  },
  {
    id: 5,
    titulo: "RF005 - Definir Preços para Itens",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem definir preços para os itens da lista. O sistema deve calcular automaticamente o custo total da lista com base nos preços definidos. Este requisito é evidente e altamente prioritário, pois é fundamental para o cálculo dos gastos.",
  },
  {
    id: 6,
    titulo: "RF006 - Listas Recorrentes",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: false,
      alta: true,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem marcar listas como recorrentes, indicando que são usadas para compras frequentes. Este requisito é evidente, embora sua prioridade seja alta, pois não é estritamente necessário, mas pode melhorar a experiência do usuário.",
  },
  {
    id: 7,
    titulo: "RF007 - Compartilhamento de Listas",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: true,
      alta: false,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem compartilhar suas listas com outros usuários por meio de convites via e-mail ou links. Os usuários compartilhados podem visualizar e editar a lista compartilhada. Este requisito é evidente e altamente prioritário, pois envolve recursos de colaboração.",
  },
  {
    id: 8,
    titulo: "RF008 - Criar Grupo de Listas",
    categoria: {
      evidente: true,
      oculto: false,
    },
    prioridade: {
      altissima: false,
      alta: true,
      media: false,
      baixa: false,
    },
    descricao:
      "Os usuários podem criar grupos de listas, permitindo organizar várias listas relacionadas em um único conjunto. Cada grupo de listas pode ser compartilhado com outros usuários, dando acesso às listas contidas no grupo. Este requisito é evidente, mas sua prioridade é alta, pois é uma funcionalidade adicional que melhora a organização das listas de compras.",
  },
];

/* REQUISITOS NÃO FUNCIONAIS */

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

/* CASOS DE USO */

const userContexts = [
  {
    id: "UC001",
    title: "Cadastro de Usuário",
    description:
      "O usuário cria uma conta na plataforma para acessar as funcionalidades.",
    primaryActor: "Usuário",
    preCondition: "O usuário não possui uma conta.",
    mainScenario: [
      "O usuário seleciona a opção de criar conta:",
      "O usuário fornece seu nome, e-mail e senha.",
      "O sistema valida as informações e cria a conta do usuário.",
    ],
    postCondition: "O usuário tem uma conta criada e pode fazer login.",
  },
  {
    id: "UC002",
    title: "Autenticação",
    description: "O usuário faz login na plataforma usando suas credenciais.",
    primaryActor: "Usuário",
    preCondition: "O usuário possui uma conta.",
    mainScenario: [
      "O usuário insere seu e-mail e senha:",
      "O sistema valida as credenciais do usuário.",
      "O usuário é redirecionado para a página principal da aplicação.",
    ],
    postCondition: "O usuário está autenticado na plataforma.",
  },
  {
    id: "UC003",
    title: "Criar Lista de Compras",
    description: "O usuário cria uma nova lista de compras.",
    primaryActor: "Usuário",
    preCondition: "O usuário está autenticado na plataforma",
    mainScenario: [
      "O usuário acessa a página de criação de listas:",
      "O usuário escolhe um nome, ícone e cor para a lista.",
      "O sistema cria uma lista vazia.",
    ],
    postCondition: "Uma nova lista de compras é criada.",
  },
  {
    id: "UC004",
    title: "Adicionar Itens à Lista",
    description: "O usuário adiciona itens à sua lista de compras.",
    primaryActor: "Usuário",
    preCondition: "O usuário possui pelo menos uma lista de compras.",
    mainScenario: [
      "O usuário seleciona a lista em que deseja adicionar itens:",
      "O usuário insere o nome, quantidade, preço e categoria do item.",
      "O sistema adiciona o item à lista.",
    ],
    postCondition: "O item é adicionado à lista de compras.",
  },
  {
    id: "UC005",
    title: "Criar Modelo de Lista de Compras",
    description:
      "O usuário cria uma lista de compras padrão para reutilização.",
    primaryActor: "Usuário",
    preCondition:
      "O usuário está autenticado na plataforma e possui uma lista de compra criada.",
    mainScenario: [
      "O usuário acessa a lista criada:",
      "O usuário marca a lista como modelo.",
    ],
    postCondition: "Um novo modelo de lista de compras é criado.",
  },
  {
    id: "UC006",
    title: "Editar Itens da Lista",
    description: "O usuário edita informações de itens da lista de compras.",
    primaryActor: "Usuário",
    preCondition: "O usuário possui pelo menos uma lista de compras com itens.",
    mainScenario: [
      "O usuário seleciona a lista com itens a serem editados:",
      "O usuário pode editar as informações (nome, categoria, quantidade, preço) e/ou excluir itens da lista.",
      "O sistema atualiza as informações dos itens.",
    ],
    postCondition: "Os itens são atualizados e o custo total é recalculado.",
  },
  {
    id: "UC007",
    title: "Criar Grupo de Listas",
    description: "O usuário cria grupos para organizar listas relacionadas.",
    primaryActor: "Usuário",
    preCondition: "O usuário está autenticado na plataforma.",
    mainScenario: [
      "O usuário acessa a página de criação de grupos:",
      "O usuário escolhe um nome, ícone e cor para o grupo.",
      "O usuário pode a partir de agora, criar listas dentro do grupo.",
    ],
    postCondition: "Um novo grupo de lista é criado.",
  },
  {
    id: "UC008",
    title: "Compartilhar Listas e/ou Grupo de Listas",
    description:
      "O usuário compartilha listas e/ou grupo de listas com outros usuários.",
    primaryActor: "Usuário",
    preCondition: "O usuário possui listas e/ou grpos de listas criados.",
    mainScenario: [
      "O usuário seleciona a lista e/ou grupo de listas que deseja compartilhar:",
      "O usuário insere os e-mails dos destinátarios.",
      "O sistema automaticamente adiciona o usuário à lista e/ou ao grupo de listas.",
    ],
    postCondition:
      "Os destinatários têm acesso à lista e/ou ao grupo de listas compartilhado e podem visualizar e editar as listas nele contidas, ou sair do compartilhamento.",
  },
  {
    id: "UC009",
    title: "Arquivar Lista de Compras e/ou Grupo de Listas",
    description:
      "O usuário arquiva uma lista de compra e/ou um grupo de listas existente.",
    primaryActor: "Usuário",
    preCondition: "O usuário possui listas e/ou grupos de listas criados.",
    mainScenario: [
      "O usuário seleciona a lista e/ou grupo de listas que deseja arquivar:",
      "O sistema marca a lista de compras e/ou um grupo de listas como arquivado.",
    ],
    postCondition:
      "A lista de compras e/ou um grupo de listas é movido para o arquivo.",
  },
  {
    id: "UC010",
    title: "Excluir Lista de Compras e/ou Grupo de Listas",
    description:
      "O usuário exclui uma lista de compra e/ou um grupo de listas existente.",
    primaryActor: "Usuário",
    preCondition:
      "O usuário possui uma lista de compras e/ou grupos de listas criados.",
    mainScenario: [
      "O usuário seleciona a lista e/ou grupo de listas que deseja excluir:",
      "O sistema envia para a lixeira a lista de compras e/ou um grupo de listas do sistema.",
      "Após 7 dias, o sistema remove permanentemente os itens adicionados à lixeira.",
    ],
    postCondition:
      "A lista de compras e/ou um grupo de listas é excluído do sistema.",
  },
  {
    id: "UC011",
    title:
      "Remover o Compartilhamento de um Usuário de uma Lista de Compras e/ou Grupo de Listas",
    description:
      "O usuário remove um membro de uma lista e/ou um grupo de listas.",
    primaryActor: "Usuário",
    preCondition: "O usuário é membro de uma lista e/ou um grupo de listas.",
    mainScenario: [
      "O usuário acessa a página de gerenciamento de compartilhamento da lista ou do grupo:",
      "O usuário seleciona o membro que deseja remover.",
      "O usuário confirma a remoção do membro.",
      "O sistema remove o membro da lista e/ou do grupo de listas.",
    ],
    postCondition: "O membro é removido do compartilhamento.",
  },
];

const briefing = [
  {
    paragraph:
      "O problema foi identificado no âmbito familiar e social, onde encontra-se a necessidade de criar e organizar listas com itens diversos a serem comprados. O problema reside na dificuldade de criar listas que permitam um fácil compartilhamento entre os usuários, onde todos possam ter acesso às atualizações em tempo real. A partir disso, definimos que uma solução digital seria ideal para providenciar uma solução que venha a sanar esse problema.",
  },
  {
    paragraph:
      "A aplicação destina-se a pessoas que participam ativamente de processos de compras e muitas vezes compartilham essa responsabilidade com terceiros, sendo familiares, amigos, colegas de trabalho, ou qualquer outro cenário.",
  },
  {
    paragraph:
      "Não há no mercado hoje uma referência de solução digital que sane esse problema especificamente. Há sim muitas soluções que permitem a criação de listas, mas o compartilhamento das mesmas com outros usuários, ou até mesmo com grupos de usuários não é uma funcionalidade muito explorada por estas.",
  },
  {
    paragraph:
      "Com a nossa proposta esperamos que os usuários possam encontrar maior facilidade na criação, organização e compartilhamento de listas de compras com outros usuários, grupos familiares, grupos de amigos, grupos de trabalho, conforme for necessário e relevante para os mesmos. ",
  },
  {
    paragraph:
      "Nosso objetivo final é desenvolver uma plataforma intuitiva que proporcione uma boa experiência de usuário e que, principalmente, facilite o processo de compras.",
  },
];
