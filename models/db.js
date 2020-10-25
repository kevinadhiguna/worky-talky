require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(
    process.env.DATABASE_URL, // mongodb://localhost:27017/EmployeeDB
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

const db = mongoose.connection;
db.on('error', (err) => console.log('❌ An Error occured...' + err));
db.once('open', () => console.log('🔌 Successfully connected to MongoDB!'));

require('./employee.model');
