// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudarTexto() {
  document.getElementById("text").innerText =
    "Me vejo trabalhando na área de desenvolvimento web";
}
mudarTexto();
// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let cor = "rgb(76, 164, 109)";

function mudarFundo(cor) {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    cor;
}

mudarFundo(cor);

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
let corQuadrado = "#ffffff";
function mudarCorQuadrado(corQuadrado) {
  document.getElementsByClassName("center-content")[0].style.backgroundColor =
    corQuadrado;
}
mudarCorQuadrado(corQuadrado);

// 4. Crie uma função que corrija o texto da tag <h1>.

function corrigirTexto() {
  document.getElementById("text2").innerText = "Desenvolvimento web";
}
corrigirTexto();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function modificarMaiusculo() {
  document.getElementsByTagName("p")[0].innerText =
    "Me vejo trabalhando na área de desenvolvimento web".toUpperCase();
}
modificarMaiusculo();
// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function exibicao() {
  let conteudoDeExib = document.getElementsByTagName("p");

  for (let i = 0; i < conteudoDeExib.length; i += 1) {
    console.log(conteudoDeExib[i]);
  }
}
exibicao();
