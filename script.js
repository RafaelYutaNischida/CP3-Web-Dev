//Credenciais válidas
var USUARIO_CORRETO = "aluno";
var SENHA_CORRETA   = "fiap2025";

//Array de jogos (strings)
var jogos = [
  "Valorant",
  "League of Legends",
  "Fortnite"
];

//Ícones decorativos rotativos para os itens
var icones = ["🎮", "🕹️", "👾", "⚔️", "🏆", "🌟", "🔥", "💎", "🚀", "🎯"];

//AUTENTICAÇÃO
function fazerLogin() {
  var usuario = document.getElementById("input-usuario").value.trim();
  var senha    = document.getElementById("input-senha").value.trim();

  esconderErro("erro-login");

  if (usuario === "" || senha === "") {
    mostrarErro("erro-login", "⚠ Preencha todos os campos antes de entrar.");
    return;
  }

  if (usuario !== USUARIO_CORRETO || senha !== SENHA_CORRETA) {
    mostrarErro("erro-login", "✕ Usuário ou senha incorretos. Tente novamente.");
    document.getElementById("input-senha").value = "";
    return;
  }

  document.getElementById("tela-login").classList.add("escondido");
  document.getElementById("tela-lista").classList.remove("escondido");
  renderizarLista();
}

function fazerLogout() {
  document.getElementById("tela-lista").classList.add("escondido");
  document.getElementById("tela-login").classList.remove("escondido");
  document.getElementById("input-usuario").value = "";
  document.getElementById("input-senha").value = "";
  esconderErro("erro-login");
}

//CRUD — ADICIONAR
function obterValorNovoJogo() {
  return document.getElementById("input-novo-jogo").value.trim();
}

function limparCampoNovo() {
  document.getElementById("input-novo-jogo").value = "";
}

function adicionarNoFim() {
  var nome = obterValorNovoJogo();
  esconderErro("erro-adicionar");

  if (nome === "") {
    mostrarErro("erro-adicionar", "⚠ Digite o nome do jogo antes de adicionar.");
    return;
  }

  jogos.push(nome);
  limparCampoNovo();
  renderizarLista();
}

function adicionarNoInicio() {
  var nome = obterValorNovoJogo();
  esconderErro("erro-adicionar");

  if (nome === "") {
    mostrarErro("erro-adicionar", "⚠ Digite o nome do jogo antes de adicionar.");
    return;
  }

  jogos.unshift(nome);
  limparCampoNovo();
  renderizarLista();
}

//CRUD — EDITAR
function iniciarEdicao(indice) {
  renderizarLista(indice);

  var inputEdicao = document.getElementById("input-edicao-" + indice);
  if (inputEdicao) {
    inputEdicao.focus();
    inputEdicao.select();
  }
}

function salvarEdicao(indice) {
  var inputEdicao = document.getElementById("input-edicao-" + indice);
  var novoNome = inputEdicao.value.trim();

  if (novoNome === "") {
    renderizarLista();
    return;
  }

  jogos[indice] = novoNome;
  renderizarLista();
}

function cancelarEdicao() {
  renderizarLista();
}

//CRUD — REMOVER
function removerItem(indice) {
  jogos.splice(indice, 1);
  renderizarLista();
}

//RENDERIZAÇÃO
function renderizarLista(indiceModoEdicao) {
  var container = document.getElementById("container-lista");
  var contador  = document.getElementById("contador-jogos");

  contador.textContent = jogos.length + (jogos.length === 1 ? " jogo" : " jogos");

  if (jogos.length === 0) {
    container.innerHTML =
      '<div class="lista-vazia">' +
        '<span class="icone-vazio">📭</span>' +
        '<p>Nenhum jogo na coleção ainda.<br>Adicione o primeiro acima!</p>' +
      '</div>';
    return;
  }

  var html = "";
  var i = 0;

  while (i < jogos.length) {
    var icone   = icones[i % icones.length];
    var numero  = (i + 1 < 10) ? "0" + (i + 1) : "" + (i + 1);

    if (i === indiceModoEdicao) {
      html +=
        '<div class="item-jogo editando">' +
          '<span class="item-numero">' + numero + '</span>' +
          '<span class="item-icone">' + icone + '</span>' +
          '<input ' +
            'type="text" ' +
            'id="input-edicao-' + i + '" ' +
            'class="item-input-edicao" ' +
            'value="' + escaparAtributo(jogos[i]) + '" ' +
            'onkeydown="tratarTeclaEdicao(event, ' + i + ')" ' +
          '/>' +
          '<div class="item-acoes">' +
            '<button class="btn-salvar"   onclick="salvarEdicao(' + i + ')"   title="Salvar">✓</button>' +
            '<button class="btn-cancelar" onclick="cancelarEdicao()"          title="Cancelar">✕</button>' +
          '</div>' +
        '</div>';
    } else {
      html +=
        '<div class="item-jogo">' +
          '<span class="item-numero">' + numero + '</span>' +
          '<span class="item-icone">' + icone + '</span>' +
          '<span class="item-nome">' + escaparHTML(jogos[i]) + '</span>' +
          '<div class="item-acoes">' +
            '<button class="btn-editar"  onclick="iniciarEdicao(' + i + ')" title="Editar">✎</button>' +
            '<button class="btn-remover" onclick="removerItem(' + i + ')"   title="Remover">🗑</button>' +
          '</div>' +
        '</div>';
    }

    i++;
  }

  container.innerHTML = html;
}

//AUXILIARES
function mostrarErro(idElemento, mensagem) {
  var el = document.getElementById(idElemento);
  el.textContent = mensagem;
  el.classList.remove("escondido");
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "";
}

function esconderErro(idElemento) {
  var el = document.getElementById(idElemento);
  el.classList.add("escondido");
  el.textContent = "";
}

function escaparHTML(texto) {
  var temp = document.createElement("span");
  temp.textContent = texto;
  return temp.innerHTML;
}

function escaparAtributo(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function tratarTeclaEdicao(evento, indice) {
  if (evento.key === "Enter") {
    salvarEdicao(indice);
  } else if (evento.key === "Escape") {
    cancelarEdicao();
  }
}

//INICIALIZAÇÃO — permite Enter nos campos de login
function inicializar() {
  var inputUsuario = document.getElementById("input-usuario");
  var inputSenha   = document.getElementById("input-senha");

  inputUsuario.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { fazerLogin(); }
  });

  inputSenha.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { fazerLogin(); }
  });
}

inicializar();