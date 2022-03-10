//exercise.js
// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//   sum +=fruits[index];
// }

// if (sum > 15) {
//   console.log(sum);
// } else {
//   console.log('valor menor que 16');
// }


// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let numero = 10;
let fatorial = 1;

for(let index = numero; index > 0; index -= 1) {
    fatorial = fatorial * index;
}
console.log(fatorial);
// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab".Utilize a string abaixo como exemplo, 

let word = 'tryber';
let newWord = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i];
}
console.log(newWord);
// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

