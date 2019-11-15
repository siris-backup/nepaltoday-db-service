require('dotenv').config()
const mongoose = require('mongoose')
mongoose.promise = global.Promise

const { getUsers } = require('./UserDbService')
const { getLatestNewsArticle } = require('./newsDbService')
const { saveNotifications, deleteNotification } = require('./NotificationDbService')

describe('Notification Db Service ', () => {
	let articles
	let users
	beforeAll(async () => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
		articles = await getLatestNewsArticle()
		users = await getUsers()
	})
	it('Save in Notification', async () => {
		const user = users[0]
		const notification = {
			article: articles[0]._id,
			user: user._id
		}

		const savedNotification = await saveNotifications(notification)
		expect(saveNotifications).not.toBeUndefined()
		const deletedNotification = await deleteNotification({ _id: savedNotification[0]._id })
		expect(deletedNotification).not.toBeUndefined()
	})
	// it('save multiple notifications together', async () => {
	// 	const user1 = users[0]
	// 	const user2 = users[1]
	// 	const notifications = [
	// 		{
	// 			article: articles[1]._id,
	// 			user: user1._id
	// 		},
	// 		{
	// 			article: articles[2]._id,
	// 			user: user2._id
	// 		}
	// 	]
	// 	const savedNotifications = await saveNotifications(notifications)
	// 	console.log('_____________savedNotifications__________', savedNotifications)
	// })
	afterAll(() => {
		mongoose.connection.close()
	})
})
