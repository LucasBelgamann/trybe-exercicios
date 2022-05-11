const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const arrayMatriz = arrays.reduce((acc, elementos) => {
  return acc.concat(elementos);
});
console.log(arrayMatriz);