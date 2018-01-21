const koa = require('koa');
const app = new koa();

const config = require('./config');

const apiRoute = require('./routes/api');

const PORT = config.port;

app.use(apiRoute.routes());

app.listen(PORT, () => console.log(`App is running on ${PORT}`));