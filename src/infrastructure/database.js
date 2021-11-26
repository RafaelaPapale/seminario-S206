const mongoose = require('mongoose');

const uri = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20C?authSource=admin`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const SeriesSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    streaming: String,
    genero: String,
    ano: Number,
    sinopse: String,
    situacao: String,
});

const SeriesModel = mongoose.model('SeriesModel', SeriesSchema);

module.exports = {
    SeriesModel,
    mongoose,
};
