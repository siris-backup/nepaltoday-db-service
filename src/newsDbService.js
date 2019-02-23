const mongoose = require('mongoose');
const { Article, Source } = require('./database/mongooseSchema');

mongoose.promise = global.Promise;

module.exports = {
	saveArticles: async (articles) => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
		var articlesSaved=null;
		try {
			const articlesSaved= await Article.insertMany( articles,{ordered:false});
		} 
		catch (error) {
			if (error.code == 11000 || error.code == 11001)
			{
				console.log ("ignored duplicates")
			}
			else
			{
				console.log(error);
			}
			
		}
		mongoose.disconnect();
		return articlesSaved;
		
	},
	getArticles: async () => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
		const newsArticles = await Article.find();
		mongoose.disconnect();
		return newsArticles;
	},
	getAllSources: async () => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
		const sources = await Source.find();
		mongoose.disconnect();
		return sources;
	},
	isExist: async (newslink) => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
		const count = await Article.count({ link: newslink });
		mongoose.disconnect();
		return count > 0 ? true : false;
	},

};
