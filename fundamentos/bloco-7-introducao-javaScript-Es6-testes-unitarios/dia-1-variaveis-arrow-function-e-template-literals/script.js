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
