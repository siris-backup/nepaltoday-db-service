require('dotenv').config()
const mongoose = require('mongoose')
mongoose.promise = global.Promise

const { getUsers } = require('./UserDbService')
const { getLatestNewsArticle } = require('./newsDbService')
const { saveNotifications, deleteNotification } = require('./NotificationDbService')

describe('Notification Db Service ', () => {
	beforeAll(() => {
		mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
	})
	it('Save in Notification', async () => {
		const articles = await getLatestNewsArticle()
		const users = await getUsers()
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
	afterAll(() => {
		mongoose.connection.close()
	})
})
