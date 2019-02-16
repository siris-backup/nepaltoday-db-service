const mongoose = require('mongoose');
const { Article } = require('./database/mongooseSchema');

mongoose.promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

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