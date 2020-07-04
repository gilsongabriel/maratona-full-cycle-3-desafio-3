'use strict';

module.exports.sum = async event => {
    let result = 0;

    if (event.queryStringParameters && (event.queryStringParameters.a && event.queryStringParameters.b)) {
        result = resolve(event.queryStringParameters.a, event.queryStringParameters.b);
    } else {
        result = `É necessário dois parâmetros para a operação de soma! Parâmeros(a, b) - Ex:/soma?a=1&b=1`;
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                resultado: result,
            },
            null,
            2
        ),
    };

    function resolve(number1, number2) {
        try {
            const n1 = Number(number1);
            const n2 = Number(number2);
            return n1 + n2
        } catch (e) {
            return 'Parâmetros inválidos! Apenas números são permitidos!';
        }
    }
};
