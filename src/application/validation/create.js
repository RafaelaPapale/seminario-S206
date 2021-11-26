module.exports = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    streaming: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    genero: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    sinopse: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    situacao: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
};