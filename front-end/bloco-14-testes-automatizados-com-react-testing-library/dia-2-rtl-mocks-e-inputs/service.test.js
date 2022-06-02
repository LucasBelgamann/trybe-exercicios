let { retornaNumeroAleatorio } = require('./service')

describe('Testando o arquivo service', () => {
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
        expect(retornaNumeroAleatorio(10, 2)).not.toBe(5);
    })
})