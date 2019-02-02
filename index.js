const mongoose = require('mongoose');
const mongooseSchema = require('./src/database/mongooseSchema');

mongoose.connect('mongodb://localhost:27017/graphqldb');

module.exports = {
	mongooseSchema
};