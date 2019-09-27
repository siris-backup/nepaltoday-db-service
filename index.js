require('dotenv').config()
const mongoose = require('mongoose')
const { DATABASE_URL } = require('./src/config/env')
const newsDbService = require('./src/newsDbService.js')
const TweetDbService = require('./src/TweetDbService.js')
const mongooseSchema = require('./src/database/mongooseSchema')

mongoose.promise = global.Promise
mongoose.connect(DATABASE_URL, { useNewUrlParser: true })

module.exports = {
	newsDbService,
	TweetDbService,
	mongooseSchema
}
