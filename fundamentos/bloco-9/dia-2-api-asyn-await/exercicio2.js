const fetch = require("node-fetch");

async function array() {
  const moedas = await fetch(`https://api.coincap.io/v2/assets`)
    .then((response) => response.json())
    .then((data) => appendar(data.data))
    .catch((error) => console.log(`Algo não esta certo: ${error}`));

  console.log(moedas);
}
array();

async function appendar() {
const coins = await array();
const ul = document.getElementById("lista");

  moedas.forEach((moeda) => {
    const li = document.createElement("li")
    li.innerText = `${moeda.name} ${moeda.symbol}`
    ul.appendChild(li);
  });
}

window.onload = () => appendar();
