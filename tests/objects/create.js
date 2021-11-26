const CreateObjects = {
    serieValida: {
        name: "The Witcher",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: 2019,
        sinopse: "muito louco",
        situacao: "Em andamento",
    },
    serieInvalida:{
        name: "",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: "String",
        sinopse: "muito louco",
        situacao: "Em andamento",
    },
    deleteValid:{
        name: "The Witcher",
    },
    deleteInvalid:{
        name: "Essa série não existe",
    },
    deleteInvalid2:{
        streaming: "Esse campo está errado",
    },
};

module.exports = CreateObjects;