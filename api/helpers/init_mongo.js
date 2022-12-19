const MONGO_URI = 'mongodb://127.0.0.1:27017';
const MONGO_DB = 'TODODB';

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('connected', () => {
    console.log(`Connection successfull with database: ${MONGO_DB}`);
})
