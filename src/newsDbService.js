const mongoose = require('mongoose')
const {
	Article,
	Source,
	TwitterHandle,
	Tweet
} = require('./database/mongooseSchema')

mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

module.exports = {
	saveArticles: async articles => {
		var articlesSaved = null
		try {
			articlesSaved = await Article.insertMany(articles, { ordered: false })
		} catch (error) {
			if (error.code === 11000 || error.code === 11001) {
				console.log('ignored duplicates')
			} else {
				console.log(error)
			}
		}
		return articlesSaved
	},

	getArticles: async () => {
		const newsArticles = await Article.find()
		return newsArticles
	},

	getTwitterHandles: async () => {
		return TwitterHandle.find()
	},

	saveTweets: async tweets => {
		var tweetSaved = null
		try {
			tweetSaved = await Tweet.insertMany(tweets, {
				ordered: false
			})
		} catch (error) {
			if (error.code === 11000 || error.code === 11001) {
				console.log('ignored duplicates')
			} else {
				console.log(error)
			}
		}
		return tweetSaved
	},

	getTweets: async () => {
		return Tweet.find()
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
