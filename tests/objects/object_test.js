const ObjectTest = {
    serieValida: {
        nome: "The Witcher",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: 2019,
        sinopse: "muito louco",
        situacao: "Em andamento",
    },
    serieInvalida:{
        nome: "",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: "String",
        sinopse: "muito louco",
        situacao: "Em andamento",
    },
    deleteValid:{
        nome: "The Witcher",
    },
    deleteInvalid:{
        nome: "Essa série não existe",
    },
    deleteInvalid2:{
        streaming: "Esse campo está errado",
    },
};

module.exports = ObjectTest;