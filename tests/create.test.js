const request = require('supertest');

const CreateObjects = require('./objects/create');
const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('POST / ', () => {
    test('Create Valid Serie - API REST', async () => {
        const response = await request(app).post(`/series/create`).send(CreateObjects.serieValida);
        //mongoose.connection.close();
        expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});

describe('POST / ', () => {
    test('Create An Invalid Serie - API REST', async () => {
        const response = await request(app).post(`/series/create`).send(CreateObjects.serieValida);
        //mongoose.connection.close();
        expect(response.body.name).toEqual(Constants.ErrorDuplicate.name);
        expect(response.statusCode).toBe(400);
    });
});

describe('POST / ', () => {
    test('Create An Invalid Serie - API REST', async () => {
        const response = await request(app).post(`/series/create`).send(CreateObjects.serieInvalida);
        //mongoose.connection.close();
        expect(response.body.name).toEqual(Constants.ErrorValidation.name);
        expect(response.statusCode).toBe(400);
    });
});