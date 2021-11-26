const request = require('supertest');

const CreateObjects = require('./objects/create');
const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('DELETE / ', () => {
    test('Delete a valid serie - API REST', async () => {
        const response = await request(app).delete(`/series/delete`).send(CreateObjects.deleteValid);
        //mongoose.connection.close();
        //expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE / ', () => {
    test('Delete an invalid serie - API REST', async () => {
        const response = await request(app).delete(`/series/delete`).send(CreateObjects.deleteInvalid);
        //mongoose.connection.close();
        expect(response.body).toEqual(0);
        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE / ', () => {
    test('Delete another invalid serie - API REST', async () => {
        const response = await request(app).delete(`/series/delete`).send(CreateObjects.deleteInvalid2);
        //mongoose.connection.close();
        //expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(400);
    });
});
