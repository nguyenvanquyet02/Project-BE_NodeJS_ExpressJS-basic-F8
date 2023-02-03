const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NVQ_education', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (error) {
        console.log('connect failure!!!');
    }
}
module.exports = {
    connect
}