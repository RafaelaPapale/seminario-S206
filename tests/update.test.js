const request = require('supertest');

const ObjectTest = require('./objects/object_test');
const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('PUT / ', () => {
    test('Update a valid serie - API REST', async () => {
        const response = await request(app).put('/series/update').send(ObjectTest.updateserieValida);
        expect(response.body.sinopse).toEqual(ObjectTest.updateserieValida.sinopse);
        expect(response.statusCode).toBe(200);
    });
});

describe('PUT / ', () => {
    test('Update an invalid serie - API REST', async () => {
        const response = await request(app).put('/series/update').send(ObjectTest.updateserieInvalida);
        expect(response.body).toEqual({});
        expect(response.statusCode).toBe(200);
    });
});

describe('PUT / ', () => {
    test('Update an invalid serie 2 - API REST', async () => {
        const response = await request(app).put('/series/update').send(ObjectTest.updateserieInvalida2);
        expect(response.body).toEqual(Constants.ErrorValidation);
        expect(response.statusCode).toBe(400);
        mongoose.connection.close();
    });
});

