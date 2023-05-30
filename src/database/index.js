const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        const connect = await mongoose.connect(
            `mongodb+srv://jun-yunan:${process.env.PASSWORD}@cluster0.vtrs6li.mongodb.net/WebsiteSales?retryWrites=true&w=majority`,
        );
        if (connect) {
            console.log('Connect to database successfully!!!');
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connect };
