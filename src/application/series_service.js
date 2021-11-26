const validate = require('validate.js');

const Constraints = require('./validation');
const SeriesRepository = require('../port/series_repository');
const Constants = require('./utils/constants');
const UtilsFunctions = require('./utils/functions');

const SeriesService = {
    async create(data) {
        try {
            const validation = validate.validate(data, Constraints.create);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            data.id = UtilsFunctions.randomInt(0, 1000);

            const response = await SeriesRepository.create(data);
            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteConstraints);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await SeriesRepository.delete(data.nome);

            if(response === 0) {
                const result = Constants.ErrorNotFound;
                return result;
            }           
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await SeriesRepository.list();
            return response;
        } catch (error) {
            return error;
        }
    },
};

module.exports = SeriesService;