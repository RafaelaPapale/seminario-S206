const request = require('supertest');

const ObjectTest = require('./objects/object_test');
const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('DELETE / ', () => {
    test('Delete a valid serie - API REST', async () => {
        const response = await request(app).delete('/series/delete').send(ObjectTest.deleteValid);
        expect(response.body).toEqual(1);
        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE / ', () => {
    test('Delete an invalid serie - API REST', async () => {
        const response = await request(app).delete('/series/delete').send(ObjectTest.deleteInvalid);
        expect(response.body.name).toEqual(Constants.ErrorNotFound.name);
        expect(response.statusCode).toBe(404);
    });
});

describe('DELETE / ', () => {
    test('Delete another invalid serie - API REST', async () => {
        const response = await request(app).delete('/series/delete').send(ObjectTest.deleteInvalid2);
        mongoose.connection.close();
        expect(response.body.name).toEqual(Constants.ErrorValidation.name);
        expect(response.statusCode).toBe(400);
    });
});
