const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
	id: String,
	title: String,
	link: {type: String,unique:true},
	imageLink: String,
	isHeadline: Boolean,
	shortDescription: String,
	source: { type: mongoose.Schema.Types.ObjectId, ref: 'Source' },
	publishedDate: { type: Date },
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
});

const Source = mongoose.model('Source', {
	id: String,
	name: String,
	link: String,
	logoLink: String,
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
});

module.exports = {
	Article, Source
};
