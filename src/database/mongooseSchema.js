const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = mongoose.model(
	'Article',
	new Schema({
		id: String,
		title: { type: String, required: true },
		link: { type: String, unique: true, required: true },
		imageLink: { type: String, required: true },
		isHeadline: Boolean,
		shortDescription: String,
		source: { type: mongoose.Schema.Types.ObjectId, ref: 'Source' },
		hostIp: String,
		publishedDate: { type: Date },
		createdDate: { type: Date, default: Date.now },
		modifiedDate: { type: Date, default: Date.now }
	})
)

const Source = mongoose.model(
	'Source',
	new Schema({
		id: String,
		name: String,
		link: String,
		logoLink: String,
		createdDate: { type: Date, default: Date.now },
		modifiedDate: { type: Date, default: Date.now }
	})
)

const TwitterHandle = mongoose.model(
	'TwitterHandle',
	new Schema({
		id: String,
		name: String,
		handle: String,
		category: String,
		weight: Number
	})
)

const Tweet = mongoose.model(
	'Tweet',
	new Schema({
		twitterHandleId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'TwitterHandle'
		},
		text: String
	})
)

module.exports = {
	Article,
	Source,
	TwitterHandle,
	Tweet
}
