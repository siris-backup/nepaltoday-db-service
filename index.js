require('dotenv').config()
const newsDbService = require('./src/newsDbService.js')
const mongooseSchema = require('./src/database/mongooseSchema')

const mongoose = require('mongoose')
mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

module.exports = {
	newsDbService,
	mongooseSchema
}
