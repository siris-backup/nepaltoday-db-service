require('dotenv').config()
const userDbService = require('./src/UserDbService')
const newsDbService = require('./src/newsDbService.js')
const TweetDbService = require('./src/TweetDbService.js')
const mongooseSchema = require('./src/database/mongooseSchema')

const mongoose = require('mongoose')
mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

module.exports = {
	newsDbService,
	TweetDbService,
	mongooseSchema,
	userDbService
}
