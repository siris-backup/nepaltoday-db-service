const mongoose = require('mongoose');
const { Article } = require('./database/mongooseSchema');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://nepaltodaydb:DvWXikMDscidxa1TBpjkQyEuTcLk7GKp1Qq0zKfkElZceixYwnNXfjKV8aF0IWnTXRqIk3WXmnM7lyK2PG8Nhw==@nepaltodaydb.documents.azure.com:10255/nepaltodaydb?ssl=true', { useNewUrlParser: true });

module.exports = {
	saveArticle: async (article) => {
		const articleSaved = await new Article(article).save();
		return articleSaved;
	},
	getArticles: async () => {
		const newsArticles = await Article.find();
		return newsArticles;
	},
	getAllSources: () => {
		throw 'Not implemented';
	}
};