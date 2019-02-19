const mongoose = require('mongoose');
const { Article, Source } = require('./database/mongooseSchema');

mongoose.promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

module.exports = {
	saveArticles: async (articles) => {
		const articlesSaved = await Article.insertMany(articles);
		return articlesSaved;
	},
	getArticles: async () => {
		const newsArticles = await Article.find();
		return newsArticles;
	},
	getAllSources: async () => {
		const sources = await Source.find();
		return sources;
	},
	isExist: async (newslink) => {
		const count = await Article.count({ link: newslink });
		return count > 0 ? true : false;
	},
};
