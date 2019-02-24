const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Article = mongoose.model('Article', new Schema({
	id: String,
	title: String,
	link: { type: String, unique: true },
	imageLink: String,
	isHeadline: Boolean,
	shortDescription: String,
	source: { type: mongoose.Schema.Types.ObjectId, ref: 'Source' },
	hostIp: String,
	publishedDate: { type: Date },
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
}));

const Source = mongoose.model('Source', new Schema({
	id: String,
	name: String,
	link: String,
	logoLink: String,
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
}))

module.exports = {
	Article, Source
};
