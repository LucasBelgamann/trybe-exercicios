const myRemove = require("./script");
const sum = require("./script");
const myFizzBuzz = require("./script");

// test("sums two values", () => {
//   expect(sum(2, 3)).toEqual(5);
// });

// test("sums 4 and 5", () => {
//   expect(sum(4, 5)).toEqual(9);
// });

// test("sums two zero", () => {
//   expect(sum(0, 0)).toEqual(0);
// });
test(`1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

test(`2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
  expect(myRemove(([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
})


test(`3 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
  expect(myRemove(([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4]));
})

//Exercício 3
test(`1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado`, () =>{
  expect(myFizzBuzz(15)).toBe('fizzbuzz')
})

test(`2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado`, () =>{
  expect(myFizzBuzz(9)).toBe('fizz')
})

test(`3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado`, () => {
  expect(myFizzBuzz(10)).toBe('buzz')
})

test(`4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado`, () => {
  expect(myFizzBuzz(8)).toBe(8);
})

test(`5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado`, () => {
  expect(myFizzBuzz('2')).toBe(false);
})

//Exercício 4
// function encode(string) {
//   return string.replaceAll('a', '1')
//   .replaceAll('e', '2')
//   .replaceAll('i', '3')
//   .replaceAll('o', '4')
//   .replaceAll('u', '5');
//   }
  
//   function decode(string) {
//   return string.replaceAll('1', 'a')
//   .replaceAll('2', 'e')
//   .replaceAll('3', 'i')
//   .replaceAll('4', 'o')
//   .replaceAll('5', 'u');
//   } 