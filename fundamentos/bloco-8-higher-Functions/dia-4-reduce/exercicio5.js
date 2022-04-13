const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

  
function containsA() {
    return names.reduce((acc, nome1) =>
       acc + nome1.split('').reduce((acumulator, nome2) => {
          if (nome2 === 'a' || nome2 === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }
console.log(containsA());