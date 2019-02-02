const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	id: String,
	title: String,
	url: String,
	shortDescription: String,
	content: String
});

const Source = mongoose.model('Source', {
	id: String,
	name: String,
	url: String
});


module.exports = {
	Article, Source
};
