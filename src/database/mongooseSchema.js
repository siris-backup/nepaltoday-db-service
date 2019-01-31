import mongoose from 'mongoose';

const NewsArticle = mongoose.model('NewsArticle', {
	id: String,
	title: String,
	url: String,
	shortDescription: String,
	content: String
});

const NewsSource = mongoose.model('NewsSource', {
	id: String,
	name: String,
	url: String
});


export default {
	NewsArticle, NewsSource
};
