const request = require('supertest');

const ObjectTest = require('./objects/object_test');
const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('GET / ', () => {
    test('List all series - API REST', async () => {
        const response = await request(app).get('/series/list').send();
        //mongoose.connection.close();
        //expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});


describe('GET / ', () => {
    test('List all series by streaming - API REST', async () => {
        const response = await request(app).get('/series/list/streaming').send(ObjectTest.listByStreamingValid);
        //mongoose.connection.close();
        //expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});

describe('GET / ', () => {
    test('List all series by an invalid streaming - API REST', async () => {
        const response = await request(app).get('/series/list/streaming').send(ObjectTest.listByStreamingInvalid);
        //mongoose.connection.close();
        expect(response.body.name).toEqual(Constants.ErrorNotFound.name);
        expect(response.statusCode).toBe(404);
    });
});

describe('GET / ', () => {
    test('List all series by an invalid streaming 2 - API REST', async () => {
        const response = await request(app).get('/series/list/streaming').send(ObjectTest.listByStreamingInvalid2);
        mongoose.connection.close();
        expect(response.body.name).toEqual(Constants.ErrorValidation.name);
        expect(response.statusCode).toBe(400);
    });
});