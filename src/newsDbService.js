const { Article, Source } = require('./database/mongooseSchema')

module.exports = {
	saveArticles: async articles => {
		try {
			return Article.insertMany(articles, { ordered: false })
		} catch (error) {
			if (error.code === 11000 || error.code === 11001) {
				console.log('ignored duplicates')
			} else {
				console.log(error)
			}
		}
		return null
	},

	deleteArticles: async conditions => {
		return Article.deleteMany(conditions)
	},

	getArticles: async () => {
		const newsArticles = await Article.find()
		return newsArticles
	},

	getAllSources: async () => {
		const sources = await Source.find()
		return sources
	},

	isExist: async newslink => {
		const count = await Article.count({ link: newslink })
		return count > 0
	}
}
