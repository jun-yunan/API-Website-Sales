const usersRouter = require('../routes/users');
const siteRouter = require('../routes/site');
const productsRouter = require('../routes/products');

function route(app) {
    app.use('/api', usersRouter);
    app.use('/api', productsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
