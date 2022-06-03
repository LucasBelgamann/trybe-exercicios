let { caixaAlta, firstWord, concatena } = require('./exercicio4');

describe('A. Faça o mock das funções para com os seguintes casos:', () => {
    test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.', () => {
        caixaAlta = jest.fn().mockImplementation((string) => string.toLowerCase());
        
        expect(caixaAlta('RAPAZ')).toBe('rapaz');
    })
    test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
        firstWord = jest.fn().mockImplementation((string) => string.charAt(string.length -1))

        expect(firstWord('calica')).toBe('a');
    })
    test('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
        concatena = jest.fn().mockImplementation((a, b, c) => `${a} ${b} ${c}`);

        expect(concatena('fala', 'fiote', 'bom')).toBe('fala fiote bom');
    })
    test(' Após criar os testes, restaure a implementação da primeira função.', () => {
        caixaAlta.mockReset();
        caixaAlta = jest.fn().mockImplementation((string) => string.toUpperCase());

        expect(caixaAlta('jeba')).toEqual('JEBA');
    })
})