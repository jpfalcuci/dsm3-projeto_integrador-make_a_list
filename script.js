const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

requisitosFuncionais.map((item, index) => {
  const reqFunc = document.createElement("div");
  reqFunc.setAttribute("id", "requisitos-funcionais-content")
  const heading = document.createElement("h5");
  heading.innerHTML = item.titulo;

  /*  ---- CATEGORIAS --- */
  const categoriaContainer = document.createElement("div");
  categoriaContainer.setAttribute("id", "requisitos-categoria");
  const categoria = document.createElement("p");
  categoria.innerHTML = "Categoria: ";

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
  prioridade.innerHTML = "Prioridade:";

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
  descricao.innerHTML = `Descrição: ${item.descricao}`;

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
