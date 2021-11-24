require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');


app.listen(3003, () => {
    // eslint-disable-next-line no-console
    console.log('DEVICE MANAGMENT SERVICE STARTED - REST server running on port ${3003}...');
});