const { SeriesModel } = require('../infrastructure/database');

const SeriesRepository = {

    async create(data) {
        try {
            const model = new SeriesModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                genero: data.name,
                ano: data.type,
                sinopse: data.sinopse,
                situacao: data.situacao,
                streaming: data.streaming,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await SeriesModel.findOneAndUpdate(filter, update, options).exec();
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(nome) {
        try {
            const response = await SeriesModel.deleteOne({ nome }).exec();
            return response.deletedCount;
        } catch (e) {
            return e;
        }
    },

    async getById(id) {
        try {
            const response = await SeriesModel.findOne({ id }).exec();
            return response;
        } catch (e) {
            return e;
        }
    },

    async getByStreaming(streaming) {
        try {
            const response = await SeriesModel.find({ streaming }).exec();
            return response;
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const response = await SeriesModel.find({}).exec();
            return response;
        } catch (e) {
            return e;
        }
    },
};

module.exports = SeriesRepository;