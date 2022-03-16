// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');
// menu.push('Contato');

// console.log(indexOfPortfolio);
// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index++) {
//     console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (nomes of names) {
//     console.log(nomes);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

// for(let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(soma / numbers.length);

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let resultado = soma / numbers.length;

console.log(resultado);

if (resultado > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let z = 0; z < numbers.length; z += 1) {
  if (maior < numbers[z]) {
    maior = numbers[z];
  }
}

console.log(maior);

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;

for (let d = 0; d < numbers.length; d += 1) {
  if (numbers[d] % 2 != 0) {
    numerosImpares = numerosImpares + 1;
  }
}

if (numerosImpares === 0) {
  console.log("Nenhum numero ímpar encontrado");
}

console.log(numerosImpares);
//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let a = 0; a < numbers.length; a += 1) {
  if (menor > numbers[a]) {
    menor = numbers[a];
  }
}
console.log("O menor numero do array é: ", menor);

//8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let limite = 25;
let array2 = [];

for (let b = 0; b < limite; b += 1) {
  array2.push(b);
}
console.log(array2);
//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let c = 0; c < array2.length; c += 1) {
  console.log(array2[c] / 2);
}
