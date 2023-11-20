const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

requisitosFuncionais.map((item) => {
  const reqFunc = document.createElement("div");
  reqFunc.setAttribute("id", "requisitos-funcionais-content");
  const heading = document.createElement("h5");
  heading.innerHTML = `<strong>${item.titulo}</strong>`;

  /*  ---- CATEGORIAS --- */
  const categoriaContainer = document.createElement("div");
  categoriaContainer.setAttribute("id", "requisitos-categoria");
  const categoria = document.createElement("p");
  categoria.innerHTML = "<strong>Categoria: </strong>";

  const inputEvidente = document.createElement("input");
  inputEvidente.setAttribute("type", "checkbox");
  item.categoria.evidente
    ? inputEvidente.setAttribute("checked", item.categoria.evidente)
    : null;
  inputEvidente.setAttribute("disabled", true);

  const label1 = document.createElement("label");
  label1.innerHTML = "Evidente";

  const inputOculto = document.createElement("input");
  inputOculto.setAttribute("type", "checkbox");
  item.categoria.oculto
    ? inputOculto.setAttribute("checked", item.categoria.oculto)
    : null;
  inputOculto.setAttribute("disabled", true);

  const label2 = document.createElement("label");
  label2.innerHTML = "Oculto";

  /*  ---- PRIORIDADES --- */

  const prioridadeContainer = document.createElement("div");
  prioridadeContainer.setAttribute("id", "requisitos-prioridade");
  const prioridade = document.createElement("p");
  prioridade.innerHTML = "<strong>Prioridade:</strong>";

  /* ----- Altíssima ----- */

  const inputAltissimo = document.createElement("input");
  inputAltissimo.setAttribute("type", "checkbox");
  item.prioridade.altissima
    ? inputAltissimo.setAttribute("checked", item.prioridade.altissima)
    : null;
  inputAltissimo.setAttribute("disabled", true);

  const labelAltissima = document.createElement("label");
  labelAltissima.innerHTML = "Altíssima";

  /* ----- Alta ----- */

  const inputAlta = document.createElement("input");
  inputAlta.setAttribute("type", "checkbox");
  item.prioridade.alta
    ? inputAlta.setAttribute("checked", item.prioridade.alta)
    : null;
  inputAlta.setAttribute("disabled", true);

  const labelAlta = document.createElement("label");
  labelAlta.innerHTML = "Alta";

  /*  ----- Média ----- */

  const inputMedia = document.createElement("input");
  inputMedia.setAttribute("type", "checkbox");
  item.prioridade.media
    ? inputMedia.setAttribute("checked", item.prioridade.media)
    : null;
  inputMedia.setAttribute("disabled", true);

  const labelMedia = document.createElement("label");
  labelMedia.innerHTML = "Média";

  /* ----- Baixa ----- */

  const inputBaixa = document.createElement("input");
  inputBaixa.setAttribute("type", "checkbox");
  item.prioridade.baixa
    ? inputBaixa.setAttribute("checked", item.prioridade.baixa)
    : null;
  inputBaixa.setAttribute("disabled", true);

  const labelBaixa = document.createElement("label");
  labelBaixa.innerHTML = "Baixa";

  /*  ---- DESCRIÇÃO ---- */

  const descricaoContainer = document.createElement("div");
  descricaoContainer.setAttribute("id", "requisitos-descricao");
  const descricao = document.createElement("p");
  descricao.innerHTML = `<strong>Descrição:</strong> ${item.descricao}`;

  /* ----- ADICIONA ELEMENTOS AO D.O.M VIA JS ----- */
  reqFunc.appendChild(heading);
  categoriaContainer.appendChild(categoria);
  categoriaContainer.appendChild(inputEvidente);
  categoriaContainer.appendChild(label1);
  categoriaContainer.appendChild(inputOculto);
  categoriaContainer.appendChild(label2);
  reqFunc.appendChild(categoriaContainer);

  prioridadeContainer.appendChild(prioridade);
  prioridadeContainer.appendChild(inputAltissimo);
  prioridadeContainer.appendChild(labelAltissima);
  prioridadeContainer.appendChild(inputAlta);
  prioridadeContainer.appendChild(labelAlta);
  prioridadeContainer.appendChild(inputMedia);
  prioridadeContainer.appendChild(labelMedia);
  prioridadeContainer.appendChild(inputBaixa);
  prioridadeContainer.appendChild(labelBaixa);
  reqFunc.appendChild(prioridadeContainer);

  descricaoContainer.appendChild(descricao);

  reqFunc.appendChild(descricaoContainer);

  c("#requisitos-funcionais").append(reqFunc);
});

requisitosNaoFuncionais.map((item) => {
  const reqNaoFunc = document.createElement("div");
  reqNaoFunc.setAttribute("id", "requisitos-nao-funcionais-content");
  const heading = document.createElement("h5");
  heading.innerHTML = `<strong>${item.titulo}</strong>`;

  /*  ---- TIPO CONTAINER ---- */

  const tipoContainer = document.createElement("div");
  tipoContainer.setAttribute("id", "requisitos-tipo");
  const tipo = document.createElement("p");
  tipo.innerHTML = "<strong>Tipo:</strong>";

  /*  ---- USABILIDADE ---- */

  const inputUsabilidade = document.createElement("input");
  inputUsabilidade.setAttribute("type", "checkbox");
  item.tipo.usabilidade
    ? inputUsabilidade.setAttribute("checked", item.tipo.usabilidade)
    : null;
  inputUsabilidade.setAttribute("disabled", true);

  const labelUsabilidade = document.createElement("label");
  labelUsabilidade.innerHTML = "Usabilidade";

  /*  ---- DESEMPENHO ---- */

  const inputDesempenho = document.createElement("input");
  inputDesempenho.setAttribute("type", "checkbox");
  item.tipo.desempenho
    ? inputDesempenho.setAttribute("checked", item.tipo.desempenho)
    : null;
  inputDesempenho.setAttribute("disabled", true);

  const labelDesempenho = document.createElement("label");
  labelDesempenho.innerHTML = "Desempenho";

  /*  ---- SEGURANÇA ---- */

  const inputSeguranca = document.createElement("input");
  inputSeguranca.setAttribute("type", "checkbox");
  item.tipo.seguranca
    ? inputSeguranca.setAttribute("checked", item.tipo.seguranca)
    : null;
  inputSeguranca.setAttribute("disabled", true);

  const labelSeguranca = document.createElement("label");
  labelSeguranca.innerHTML = "Segurança";

  /*  ---- COMPATIBILIDADE ---- */

  const inputCompatibilidade = document.createElement("input");
  inputCompatibilidade.setAttribute("type", "checkbox");
  item.tipo.compatibilidade
    ? inputCompatibilidade.setAttribute("checked", item.tipo.compatibilidade)
    : null;
  inputCompatibilidade.setAttribute("disabled", true);

  const labelCompatibilidade = document.createElement("label");
  labelCompatibilidade.innerHTML = "Compatibilidade";

  /* ---- ESCALABILIDADE ---- */

  const inputEscalabilidade = document.createElement("input");
  inputEscalabilidade.setAttribute("type", "checkbox");
  item.tipo.escalabilidade
    ? inputEscalabilidade.setAttribute("checked", item.tipo.escalabilidade)
    : null;
  inputEscalabilidade.setAttribute("disabled", true);

  const labelEscalabilidade = document.createElement("label");
  labelEscalabilidade.innerHTML = "Escalabilidade";

  /*  ---- OBRIGATORIEDADE CONTAINER ---- */

  const obrigatoriedadeContainer = document.createElement("div");
  obrigatoriedadeContainer.setAttribute("id", "requisitos-obrigatoriedade");
  const obrigatoriedade = document.createElement("p");
  obrigatoriedade.innerHTML = "<strong>Obrigatoriedade:</strong>";

  /*  ---- OBRIGATÓRIO ---- */

  const inputObrigatorio = document.createElement("input");
  inputObrigatorio.setAttribute("type", "checkbox");
  item.obrigatoriedade.obrigatorio
    ? inputObrigatorio.setAttribute("checked", item.obrigatoriedade.obrigatorio)
    : null;
  inputObrigatorio.setAttribute("disabled", true);

  const labelObrigatorio = document.createElement("label");
  labelObrigatorio.innerHTML = "Obrigatório";

  /*  ---- DESEJÁVEL ---- */

  const inputDesejavel = document.createElement("input");
  inputDesejavel.setAttribute("type", "checkbox");
  item.obrigatoriedade.desejavel
    ? inputDesejavel.setAttribute("checked", item.obrigatoriedade.desejavel)
    : null;
  inputDesejavel.setAttribute("disabled", true);

  const labelDesejavel = document.createElement("label");
  labelDesejavel.innerHTML = "Desejável";

  /*  ---- DURABILIDADE CONTAINER ---- */

  const durabilidadeContainer = document.createElement("div");
  durabilidadeContainer.setAttribute("id", "requisitos-durabilidade");
  const durabilidade = document.createElement("p");
  durabilidade.innerHTML = "<strong>Durabilidade:</strong>";

  /*  ---- PERMANENTE ---- */

  const inputPermanente = document.createElement("input");
  inputPermanente.setAttribute("type", "checkbox");
  item.durabilidade.permanente
    ? inputPermanente.setAttribute("checked", item.durabilidade.permanente)
    : null;
  inputPermanente.setAttribute("disabled", true);

  const labelPermanente = document.createElement("label");
  labelPermanente.innerHTML = "Permanente";

  /*  ---- TRANSITÓRIO ---- */

  const inputTransitorio = document.createElement("input");
  inputTransitorio.setAttribute("type", "checkbox");
  item.durabilidade.transitorio
    ? inputTransitorio.setAttribute("checked", item.durabilidade.transitorio)
    : null;
  inputTransitorio.setAttribute("disabled", true);

  const labelTransitorio = document.createElement("label");
  labelTransitorio.innerHTML = "Transitório";

  /*  ---- DESCRIÇÃO ---- */

  const descricaoContainer = document.createElement("div");
  descricaoContainer.setAttribute("id", "requisitos-descricao");
  const descricao = document.createElement("p");
  descricao.innerHTML = `<strong>Descrição:</strong> ${item.descricao}`;

  /* ----- ADICIONA ELEMENTOS AO D.O.M VIA JS ----- */

  tipoContainer.appendChild(tipo);
  tipoContainer.appendChild(inputUsabilidade);
  tipoContainer.appendChild(labelUsabilidade);
  tipoContainer.appendChild(inputDesempenho);
  tipoContainer.appendChild(labelDesempenho);
  tipoContainer.appendChild(inputSeguranca);
  tipoContainer.appendChild(labelSeguranca);
  tipoContainer.appendChild(inputCompatibilidade);
  tipoContainer.appendChild(labelCompatibilidade);
  tipoContainer.appendChild(inputEscalabilidade);
  tipoContainer.appendChild(labelEscalabilidade);

  obrigatoriedadeContainer.appendChild(obrigatoriedade);
  obrigatoriedadeContainer.appendChild(inputObrigatorio);
  obrigatoriedadeContainer.appendChild(labelObrigatorio);
  obrigatoriedadeContainer.appendChild(inputDesejavel);
  obrigatoriedadeContainer.appendChild(labelDesejavel);

  durabilidadeContainer.appendChild(durabilidade);
  durabilidadeContainer.appendChild(inputPermanente);
  durabilidadeContainer.appendChild(labelPermanente);
  durabilidadeContainer.appendChild(inputTransitorio);
  durabilidadeContainer.appendChild(labelTransitorio);

  descricaoContainer.appendChild(descricao);

  reqNaoFunc.appendChild(heading);
  reqNaoFunc.appendChild(tipoContainer);
  reqNaoFunc.append(obrigatoriedadeContainer);
  reqNaoFunc.append(durabilidadeContainer);
  reqNaoFunc.append(descricaoContainer);

  c("#requisitos-nao-funcionais").append(reqNaoFunc);
});

function createUserContextContent(context) {
  const listItem = document.createElement("div");
  listItem.setAttribute("id", "users-contexts");

  const title = document.createElement("h5");
  title.innerHTML = `<strong>${context.id} - ${context.title}</strong>`;
  listItem.appendChild(title);

  const descriptionPara = document.createElement("p");
  descriptionPara.innerHTML = `<strong>Descrição: </strong>${context.description}`;
  listItem.appendChild(descriptionPara);

  const primaryActorPara = document.createElement("p");
  primaryActorPara.innerHTML = `<strong>Ator Primário: </strong>${context.primaryActor}`;
  listItem.appendChild(primaryActorPara);

  const preConditionPara = document.createElement("p");
  preConditionPara.innerHTML = `<strong>Pré-Condição: </strong>${context.preCondition}`;
  listItem.appendChild(preConditionPara);

  const mainScenarioOl = document.createElement("ol");
  context.mainScenario.forEach((scenario) => {
    const scenarioLi = document.createElement("li");
    scenarioLi.textContent = scenario;
    mainScenarioOl.appendChild(scenarioLi);
  });
  listItem.appendChild(mainScenarioOl);

  const postConditionPara = document.createElement("p");
  postConditionPara.innerHTML = `<strong>Pós-Condição: </strong>${context.postCondition}`;
  listItem.appendChild(postConditionPara);

  return listItem;
}

const list = document.getElementById("casos-usos");
userContexts.forEach((context) => {
  const contextContent = createUserContextContent(context);
  list.appendChild(contextContent);
});
