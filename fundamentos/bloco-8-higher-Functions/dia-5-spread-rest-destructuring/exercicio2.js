const sum = (...rest) => rest.reduce((acc, numero) => acc + numero);

console.log(sum(2, 3, 4, 5, 88));