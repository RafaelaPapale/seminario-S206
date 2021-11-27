const SeriesService = require('../application/series_service');
const Utils = require('../application/utils/utils');

const route = '/series';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await SeriesService.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await SeriesService.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await SeriesService.list(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list/streaming`, async (req, res) => {
        const response = await SeriesService.listByStreaming(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await SeriesService.updateByName(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};

