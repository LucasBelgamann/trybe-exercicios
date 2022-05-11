// const acordando = () => {
//     return "Acordando!";
// };

// const tomarCafe = () => {
//     return 'Bora tomar café!!';
// };

// const partiuDormir = () => {
//     return 'Partiu dormir!!';
// };

// const  doingThings = (func) => func('string');

// console.log(doingThings(acordando));
// console.log(doingThings(tomarCafe));
// console.log(doingThings(partiuDormir));

//Exercício 1
const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'),
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva'),
  };
  return employees;
};

const nomeEmail = (nome) => {
  return {
    nomeCompleto: nome,
    email: `${nome.replace(' ', '_').toLowerCase()}@trybe.com`,
  };
};

console.log(newEmployees(nomeEmail));

// //Exercício 2
const resultadoSorteio = () => {
  const numeroRandom = Math.ceil(Math.random() * 5);
  return numeroRandom;
};

const verificaNumero = (n, callBack) => {
  if (n === callBack()) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};
console.log(verificaNumero(4, resultadoSorteio));
