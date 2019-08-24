const { TwitterHandle, Tweet } = require('./database/mongooseSchema')

module.exports = {
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

	deleteTweets: async conditions => {
		return Tweet.deleteMany(conditions)
	},

	getTweets: async () => {
		return Tweet.find()
	}
}