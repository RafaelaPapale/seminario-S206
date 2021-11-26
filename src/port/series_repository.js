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
                name: data.name,
                ano: data.type,
                sinopse: data.sinopse,
                situacao: data.situacao,
                streaming: data.streaming,
            };
            const options = { new: true };
            const filter = { id: data.id };
            const result = await SeriesModel.findOneAndUpdate(filter, update, options).exec();
            if (!result) return result;
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(name) {
        try {
            const response = await SeriesModel.deleteOne({ name }).exec();
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

    async getByName(name) {
        try {
            const response = await SeriesModel.findOne({ name }).exec();
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