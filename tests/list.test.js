const request = require('supertest');

const { mongoose } = require('../src/infrastructure/database');
const Constants = require('../src/application/utils/constants');
const app = require('../src/infrastructure/rest_server');

describe('GET / ', () => {
    test('List all series - API REST', async () => {
        const response = await request(app).get('/series/list').send();
        mongoose.connection.close();
        //expect(response.body.name).toEqual(CreateObjects.serieValida.name);
        expect(response.statusCode).toBe(200);
    });
});


