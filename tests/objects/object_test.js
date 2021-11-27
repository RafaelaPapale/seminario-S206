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
    listByStreamingValid:{
        streaming: "Netflix",
    },
    listByStreamingInvalid:{
        streaming: "Hulu",
    },
    listByStreamingInvalid2:{
        streaming: 2,
    },
    updateserieValida: {
        nome: "The Witcher",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: 2019,
        sinopse: "não muito louco",
        situacao: "Em andamento",
    },
    updateserieInvalida: {
        nome: "Game of Thrones",
        streaming: "HBO MAX",
        genero: "Fantasia",
        ano: 2011,
        sinopse: "CAOS",
        situacao: "Finalizada",
    },
    updateserieInvalida2: {
        nome: "The Witcher",
        streaming: "Netflix",
        genero: "Fantasia",
        ano: "não",
        sinopse: "não muito louco",
        situacao: "Em andamento",
    },
};

module.exports = ObjectTest;