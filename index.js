require('dotenv').config()
const newsDbService = require('./src/newsDbService.js');
const mongooseSchema = require('./src/database/mongooseSchema');

module.exports = {
	newsDbService,
	mongooseSchema
};