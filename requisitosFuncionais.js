let requisitosFuncionais = [
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
