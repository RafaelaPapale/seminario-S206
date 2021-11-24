const request = require('supertest');

const CreateObjects = require('./objects/create');
const SeriesService = require('../src/application/series_service');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('POST / ', () => {
    test('Create Valid Serie - API REST', async () => {
        const response = await request(app).post(`/series/create`).send(CreateObjects.serieValida);
        expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});

