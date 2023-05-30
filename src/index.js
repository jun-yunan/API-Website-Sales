const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./routes');
const handlebars = require('express-handlebars').engine;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
