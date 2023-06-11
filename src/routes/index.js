const usersRouter = require('./users');
const siteRouter = require('./site');
const productsRouter = require('./products');

function route(app) {
    app.use('/api', usersRouter);
    // app.use('/api', productsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
