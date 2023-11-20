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
