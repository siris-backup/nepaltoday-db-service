const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	id: String,
	title: String,
	link: String,
	imageLink: String,
	isHeadline: Boolean,
	shortDescription: String,
	source: String
});

const Source = mongoose.model('Source', {
	id: String,
	name: String,
	url: String
});


module.exports = {
	Article, Source
};
