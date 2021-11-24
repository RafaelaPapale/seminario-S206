const express = require('express');

const app = express();
app.use(express.json());

require('../port/series_api')(app);

module.exports = app;