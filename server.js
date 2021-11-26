require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(3003, () => {
    console.log('REST server running on port ${3003}...');
});