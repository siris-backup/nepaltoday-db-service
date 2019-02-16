const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	id: String,
	title: String,
	link: String,
	imageLink: String,
	isHeadline: Boolean,
	shortDescription: String,
	source: String,
	publishedDate: { type: Date },
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
});

const Source = mongoose.model('Source', {
	id: String,
	name: String,
	url: String,
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
});


module.exports = {
	Article, Source
};
