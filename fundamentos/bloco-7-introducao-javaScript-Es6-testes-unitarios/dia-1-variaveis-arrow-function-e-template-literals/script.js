// Primeira parte: Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} 'ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};
testingScope(true);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Primeira parte: Seu código aqui.
const ordenaNumeros = (oddsAndEvens) => oddsAndEvens.sort();

console.log(`Os numeros ${ordenaNumeros(oddsAndEvens)} se encontraram ordenados de forma crescente!`);

//Segunda parte: Exercicio 1;

const number = (n) => {
  let fatorial = 1;
  
  for (let i = n; i >= 1; i--) {
    fatorial = fatorial * i;
  }
  return fatorial;
}
console.log(number(7));

const fatorial = (n) => n === 0? 1 : n === 1? 1 : n * fatorial(n - 1);
console.log(fatorial(7));
