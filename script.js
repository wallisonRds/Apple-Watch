const imagemVisualizacao = document.querySelector("#visualizacao img");
const ul = document.getElementById("selecionar-imagem");
const tituloProduto = document.querySelector("h1");
const opcaoProduto = document.querySelectorAll(
  '#opcoes-tamanho [name="opcao-tamanho"]'
);
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const selecaoCores = document.querySelectorAll(
  '#selecao-cores li [name="opcao-cor"]'
);

const imagensMiniaturas = document.querySelectorAll(
  "#selecionar-imagem li label img"
);

let NumCorSelecionada = 1;
let numTamanhoSelecionado = 1;
let numImagemSelecionada = 1;

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "rosa-claro",
];

// fazendo um forEach para pegar cada elemento de input dentro da div
opcaoProduto.forEach((elemento) => {
  elemento.addEventListener("click", atualizarTamanho);
});

// fazendo um evento direto na ul
ul.addEventListener("click", atualizarImagemSelecionada);

selecaoCores.forEach((cor) => {
  cor.addEventListener("click", atualizarCorSelecionada);
});

// pegando a imagem verificando o id das imagens pequenas
// e guardando em uma variavel para mudar o src da imagem
function atualizarImagemSelecionada() {
  // selecionar a opção marcada pegando apenas a primeira informação dentro do id
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);
  // colocando a primeira string da posição zero que está no id e guardando em uma variavel
  numImagemSelecionada = opcaoImagemSelecionada;

  //selecionar a imagem e modificar parte do seu src
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[
    NumCorSelecionada
  ].toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
}

// pegando o input que está dentro da div e pegando o primeiro valor do id do input checkado
// após isso adicionando esse valor pego do input checado e passando para uma lista para ser usado de indice
// ao usar o textContent para mudar o item descrito, apenas utilizar a lista ja pronta para atualizar o valor
function atualizarTamanho() {
  let tamanho = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numTamanhoSelecionado = tamanho;
  let tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  tituloProduto.textContent = `Pulseira loop esportiva ${opcoesCores[
    NumCorSelecionada
  ].toLowerCase()} para caixa de ${tamanhoCaixa}`;

  if (tamanhoCaixa === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  NumCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[NumCorSelecionada];

  tituloProduto.textContent = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${opcoesTamanho[
    numTamanhoSelecionado
  ].toLowerCase()}`;

  nomeCorSelecionada.textContent = `Cor - ${nomeCor}`;
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;

  //pegando as imagens e fazendo um looping por elas, mudando o src
  imagensMiniaturas.forEach((miniatura, index) => {
    miniatura.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${index}.jpeg`;
  });
}
