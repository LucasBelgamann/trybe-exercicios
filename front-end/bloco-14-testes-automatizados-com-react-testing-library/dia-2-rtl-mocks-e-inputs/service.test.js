let { retornaNumeroAleatorio } = require('./service')

describe('1.Testando o arquivo service', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(10)
    test('Utilize o mock e defina o retorno padrão como 10.', () => {
        expect(retornaNumeroAleatorio()).toBe(10);
    })
    test('Teste se a função foi chamada,', () => {
        retornaNumeroAleatorio();
        expect(retornaNumeroAleatorio).toHaveBeenCalled()
    })
    test('Qual seu retorno e quantas vezes foi chamada.', () => {
        retornaNumeroAleatorio();
        expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(3)
    })
})

describe('2.Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação', () => {
    test('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
        retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(retornaNumeroAleatorio(10, 2)).toBe(5);
        expect(retornaNumeroAleatorio).toHaveBeenCalled();
        expect(retornaNumeroAleatorio(10, 2)).not.toEqual(5);
    })
})

describe('3.Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
    test('Retorne a multiplicação dos parâmetros.', () => {
        retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

        expect(retornaNumeroAleatorio(2, 2, 2)).toBe(8);
        expect(retornaNumeroAleatorio).toHaveBeenCalled();
        expect(retornaNumeroAleatorio(2, 2, 2)).toEqual(8);
    })
    test('Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.', () => {
        retornaNumeroAleatorio.mockReset();
        retornaNumeroAleatorio = jest.fn().mockImplementation(a => a * 2);

        expect(retornaNumeroAleatorio(2)).toBe(4);
    })
})